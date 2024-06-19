export const JobItemTag = ({
  text,
  backgroundColor,
}: {
  text: string;
  backgroundColor: string;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        borderRadius: '0.75rem',
        padding: '0.375rem 1rem',
        fontFamily: 'var(--font-montserrat)',
        fontSize: '0.75rem',
        fontWeight: '500',
        lineHeight: '1.25rem',
        color: 'white',
        backgroundColor: backgroundColor,
      }}
    >
      {text}
    </div>
  );
};
