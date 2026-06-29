interface ProposalMasterLogoProps {
  className?: string;
  size?: number;
}

export function ProposalMasterLogo({ className = '', size = 18 }: ProposalMasterLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 7h20l12 12v38H18V7Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M38 7v13h12" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M25 31h18M25 40h18M25 49h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 18v39h28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.38" />
    </svg>
  );
}
