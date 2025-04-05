/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
class TypeWriter {
	constructor(element) {
		this.element = element;
		this.words = JSON.parse(element.getAttribute('data-text'));
		this.wait = 3000;
		this.isDeleting = false;
		this.text = '';
		this.wordIndex = 0;
		this.type();
	}

	type() {
		const current = this.wordIndex % this.words.length;
		const fullText = this.words[current];

		if(this.isDeleting) {
			this.text = fullText.substring(0, this.text.length - 1);
		} else {
			this.text = fullText.substring(0, this.text.length + 1);
		}

		this.element.innerHTML = this.text;

		let typeSpeed = 100;

		if(this.isDeleting) {
			typeSpeed /= 2;
		}

		if(!this.isDeleting && this.text === fullText) {
			typeSpeed = this.wait;
			this.isDeleting = true;
		} else if(this.isDeleting && this.text === '') {
			this.isDeleting = false;
			this.wordIndex++;
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}



document.addEventListener('DOMContentLoaded', () => {
	const element = document.querySelector('.typewriter');
	new TypeWriter(element);
});

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {

				var $article = $main_articles.filter('#' + id);

				// No such article? Bail.
					if ($article.length == 0)
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true)) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Mark as visible.
								$body.addClass('is-article-visible');

							// Deactivate all articles (just in case one's already active).
								$main_articles.removeClass('active');

							// Hide header, footer.
								$header.hide();
								$footer.hide();

							// Show main, article.
								$main.show();
								$article.show();

							// Activate article.
								$article.addClass('active');

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function() {
									$body.removeClass('is-switching');
								}, (initial ? 1000 : 0));

							return;

						}

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible')) {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active');

							$currentArticle.removeClass('active');

						// Show article.
							setTimeout(function() {

								// Hide current article.
									$currentArticle.hide();

								// Show article.
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible');

						// Show article.
							setTimeout(function() {

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

			};

			$main._hide = function(addState) {

				var $article = $main_articles.filter('.active');

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'))
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true)
						history.pushState(null, null, '#');

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Deactivate article.
								$article.removeClass('active');

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								$body.removeClass('is-article-visible');

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching');

							// Window stuff.
								$window
									.scrollTop(0)
									.triggerHandler('resize.flexbox-fix');

							return;

						}

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active');

				// Hide article.
					setTimeout(function() {

						// Hide article, main.
							$article.hide();
							$main.hide();

						// Show footer, header.
							$footer.show();
							$header.show();

						// Unmark as visible.
							setTimeout(function() {

								$body.removeClass('is-article-visible');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);


			};

		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function(event) {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

			});

			$window.on('keyup', function(event) {

				switch (event.keyCode) {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'))
								$main._hide(true);

						break;

					default:
						break;

				}

			});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});

		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});

			}

		// Initialize.

			// Hide main, articles.
				$main.hide();
				$main_articles.hide();

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#')
					$window.on('load', function() {
						$main._show(location.hash.substr(1), true);
					});

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    // Define categories of technical keywords with descriptions
    const keywordData = {
        "languages": {
            "Python": "General-purpose programming language",
            "R": "Language for statistical computing",
            "SQL": "Structured Query Language for databases",
            "Scala": "Functional programming language for JVM"
        },
        "Framework": {
            "PyTorch": "Open source machine learning framework",
            "LangChain": "Framework for developing LLM-powered applications",
            "HuggingFace Transformers": "Library for state-of-the-art NLP",
            "FastAPI": "Modern web framework for building APIs",
            "Flask": "Lightweight WSGI web application framework",
			"RBAC": "Role-Based Access Control",
            "IAM": "Identity and Access Management",
			"ELK stack": "The ELK Stack (Elasticsearch, Logstash, Kibana) collects, processes, and visualizes data, especially logs, for analysis."
        },
        "Cloud": {
            "GCP": "Google Cloud Platform",
            "AWS": "Amazon Web Services",
            "S3": "AWS Simple Storage Service",
            "BigQuery": "Google's serverless data warehouse",
            "Pub/Sub": "Google's messaging service",
			"MLFlow": "MLflow streamlines machine learning lifecycle management: experiment tracking, model registry, and deployment. ",
			"Databricks": "Databricks is a cloud-based, unified platform for data engineering, analytics, and AI, built on Apache Spark"
        },
        "Big Data Tool": {
            "Docker": "Platform for developing, shipping, and running applications",
            "Terraform": "Infrastructure as code software tool",
            "ShinyProxy": "Open source tool for deploying Shiny applications",
            "Apache Beam": "Unified model for batch and streaming data processing",
            "Apache Superset": "Modern data exploration and visualization platform",
            "Airflow": "Platform to programmatically author, schedule, and monitor workflows",
			"Kafka": "A distributed publish-subscribe messaging system",
			"Apache Iceberg": "An open-source table format for big data, enabling efficient data lake management and querying",
			"Ray" : "An unified, open-source framework for scaling Python and AI workloads, simplifying distributed computing",
			"ETL": "Extract, Transform, Load process",
            "CTEs": "Common Table Expressions in SQL",
			"SCD Type-2": "Track historical data in dimension tables, preserving changes over time",
			"Great Expectations": "A Python library that validates, documents, and profiles data for quality assurance",
			"Apache Spark": "An unified analytics engine for big data processing and machine learning",
			"LinkedIn DataHub" : "An open-source metadata platform for data discovery, observability, and governance. ",
			"Grafana": "Grafana is an open-source platform for visualizing and exploring data through interactive dashboards. "
        }
    };
    
    // Flatten the keyword data for searching
    let allKeywords = {};
    for (const category in keywordData) {
        for (const keyword in keywordData[category]) {
            allKeywords[keyword] = {
                description: keywordData[category][keyword],
                category: category
            };
        }
    }
    
    // Find and highlight keywords in the resume
    highlightKeywords();
    
    function highlightKeywords() {
        const elements = document.querySelectorAll('.achievement-category li');
        
        elements.forEach(element => {
            let html = element.innerHTML;
            
            // Sort keywords by length (longest first) to avoid partial matches
            const sortedKeywords = Object.keys(allKeywords).sort((a, b) => b.length - a.length);
            
            for (const keyword of sortedKeywords) {
                const regex = new RegExp(`\\b${escapeRegExp(keyword)}\\b`, 'g');
                html = html.replace(regex, `<span class="keyword" data-keyword="${keyword}">$&</span>`);
            }
            
            element.innerHTML = html;
        });
        
        // Add event listeners to keywords
        document.querySelectorAll('.keyword').forEach(keyword => {
            keyword.addEventListener('mouseenter', showTooltip);
            keyword.addEventListener('mouseleave', hideTooltip);
        });
    }
    
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    function showTooltip(e) {
        const keyword = e.target.getAttribute('data-keyword');
        const data = allKeywords[keyword];
        
        if (!data) return;
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'keyword-tooltip';
        tooltip.innerHTML = `
            <strong>${keyword}</strong> - ${data.category}<br>
            ${data.description}
        `;
        
        // Position tooltip
        document.body.appendChild(tooltip);
        const rect = e.target.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        
        // Show tooltip with animation
        setTimeout(() => tooltip.classList.add('visible'), 10);
        
        // Store reference to the tooltip
        e.target.tooltip = tooltip;
    }
    
    function hideTooltip(e) {
        if (e.target.tooltip) {
            e.target.tooltip.classList.remove('visible');
            setTimeout(() => {
                if (e.target.tooltip) {
                    e.target.tooltip.remove();
                    e.target.tooltip = null;
                }
            }, 300);
        }
    }
});

