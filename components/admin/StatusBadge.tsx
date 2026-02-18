type Status = 'pending' | 'confirmed' | 'cancelled';

const styles: Record<Status, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
  confirmed: 'bg-green-500/20  text-green-400  border border-green-500/30',
  cancelled: 'bg-red-500/20    text-red-400    border border-red-500/30',
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
