import { mailto, userData } from '@/utils/constants'
import CopyEmail from './CopyEmail'
import { Calendar, Mail } from './Icons'

// Primary CTA group, used in the hero and the closing contact band.
export default function ContactActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={mailto} className="btn-primary">
        <Mail />
        Email me
      </a>
      {userData.booking_url && (
        <a href={userData.booking_url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          <Calendar />
          Book a call
        </a>
      )}
      <CopyEmail />
    </div>
  )
}
