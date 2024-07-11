import { StatusIcon } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <div
      className={clsx('status-badge', {
        'bg-blue-600': status === 'pending',
        'bg-green-600': status === 'scheduled',
        'bg-red-600': status === 'cancelled',
      })}
    >
      <Image
        src={StatusIcon[status]}
        alt={status}
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx('text-12-semibold capitalize', {
          'text-blue-500': status === 'pending',
          'text-green-500': status === 'scheduled',
          'text-red-500': status === 'cancelled',
        })}
      >
        {status}
      </p>
    </div>
  )
}
