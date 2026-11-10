import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { credentials } from '@/lib/credentials'
import './credentials.css'

export default function Credentials({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`credentials ${compact ? 'credentials-compact' : ''}`}>
      {compact && <h2 className="folio-label credentials-label">Credentials</h2>}
      <ul className="credential-list">
        {credentials.map((credential) => {
          const { hostname } = new URL(credential.href)
          const linkLabel = hostname === 'credly.com' || hostname === 'www.credly.com'
            ? 'View on Credly'
            : 'View credential'

          return (
            <li key={credential.id}>
              <a className="credential" href={credential.href} target="_blank" rel="noopener noreferrer"
                aria-label={`${linkLabel}: ${credential.issuer} ${credential.title}`}>
                <Image src={credential.image} alt="" width={100} height={100} className="credential-badge" />
                <div className="credential-content">
                  <p className="credential-issuer">{credential.level}</p>
                  <h3>{credential.title}</h3>
                  {!compact && <p className="credential-dates">Issued {credential.issued}{credential.expires && ` · Valid through ${credential.expires}`}</p>}
                  {!compact && <p className="credential-skills">{credential.skills.join(' · ')}</p>}
                  <span className="credential-verify">{linkLabel} <ArrowUpRight size={13} aria-hidden="true" /></span>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
