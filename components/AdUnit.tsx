export default function AdUnit({ slot }: { slot: 'in-article' | 'sidebar' | 'footer-banner' | 'header-banner' }) {
  const styles: Record<string, React.CSSProperties> = {
    'in-article': {
      width: '100%',
      minHeight: '280px',
      background: '#111',
      border: '1px dashed #333',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '32px 0',
      color: '#333',
      fontSize: '13px',
    },
    'sidebar': {
      width: '100%',
      minHeight: '600px',
      background: '#111',
      border: '1px dashed #333',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#333',
      fontSize: '13px',
    },
    'footer-banner': {
      width: '100%',
      minHeight: '90px',
      background: '#111',
      border: '1px dashed #333',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 0 32px 0',
      color: '#333',
      fontSize: '13px',
    },
    'header-banner': {
      width: '100%',
      minHeight: '90px',
      background: '#111',
      border: '1px dashed #333',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 0 32px 0',
      color: '#333',
      fontSize: '13px',
    },
  };

  return (
    <div style={styles[slot]}>
      Advertisement
    </div>
  );
}