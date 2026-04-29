'use client'

import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiPython,
  SiRust,
  SiFastapi,
  SiApachespark,
  SiApacheairflow,
  SiApachekafka,
  SiGooglebigquery,
  SiPostgresql,
  SiElasticsearch,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiLangchain,
} from 'react-icons/si'
import { coreStack } from '@/lib/content'

type Tile = { name: string; icon?: IconType; glyph?: string }

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  Rust: SiRust,
  FastAPI: SiFastapi,
  Spark: SiApachespark,
  Airflow: SiApacheairflow,
  Kafka: SiApachekafka,
  BigQuery: SiGooglebigquery,
  Postgres: SiPostgresql,
  Elasticsearch: SiElasticsearch,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  LangChain: SiLangchain,
}

const glyphMap: Record<string, string> = {
  SQL: '⌘',
  RAG: '∮',
}

const tiles: Tile[] = coreStack.map((name) => ({
  name,
  icon: iconMap[name],
  glyph: glyphMap[name],
}))

export function CoreStack() {
  return (
    <div className="relative">
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-vint-cyan/80">
        // core_stack
      </p>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ visible: { transition: { staggerChildren: 0.02 } } }}
        className="grid grid-cols-5 gap-1.5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-[repeat(15,minmax(0,1fr))]"
      >
        {tiles.map((t) => {
          const Icon = t.icon
          return (
            <motion.li
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 4 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative flex h-16 flex-col items-center justify-center gap-1 rounded-sm border border-vint-cyan/15 bg-black/40 px-1 py-2 transition-all hover:border-vint-cyan/55 hover:bg-vint-cyan/5 hover:shadow-[0_0_14px_rgba(34,211,238,0.18)]"
              title={t.name}
            >
              <span className="text-zinc-300 transition-colors group-hover:text-vint-cyan">
                {Icon ? (
                  <Icon size={20} aria-hidden />
                ) : (
                  <span className="font-mono text-lg text-vint-cyan/80" aria-hidden>
                    {t.glyph ?? t.name[0]}
                  </span>
                )}
              </span>
              <span className="truncate w-full text-center font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-400 transition-colors group-hover:text-vint-cream">
                {t.name}
              </span>
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  )
}
