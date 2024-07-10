import PropTypes from 'prop-types';

const IconWrapper = ({ children, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const iconPropTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export function MountainIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </IconWrapper>
  );
}
MountainIcon.propTypes = iconPropTypes;

export function MenuIcon(props) {
  return (
    <IconWrapper {...props}>
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </IconWrapper>
  );
}
MenuIcon.propTypes = iconPropTypes;

export function HomeIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </IconWrapper>
  );
}
HomeIcon.propTypes = iconPropTypes;

export function UserIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </IconWrapper>
  );
}
UserIcon.propTypes = iconPropTypes;

export function FolderIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </IconWrapper>
  );
}

FolderIcon.propTypes = iconPropTypes;

export function BadgeIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </IconWrapper>
  );
}

BadgeIcon.propTypes = iconPropTypes;

export function MailIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </IconWrapper>
  );
}

MailIcon.propTypes = iconPropTypes;

export function PhoneIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </IconWrapper>
  );
}

PhoneIcon.propTypes = iconPropTypes;

export function LocateIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="8" />
      <line x1="12" x2="12" y1="2" y2="4" />
      <line x1="12" x2="12" y1="20" y2="22" />
      <line x1="2" x2="4" y1="12" y2="12" />
      <line x1="20" x2="22" y1="12" y2="12" />
    </IconWrapper>
  );
}

LocateIcon.propTypes = iconPropTypes;

export function CodeIcon(props) {
  return (
    <IconWrapper {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </IconWrapper>
  );
}

CodeIcon.propTypes = iconPropTypes;

export function BriefcaseIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </IconWrapper>
  );
}

BriefcaseIcon.propTypes = iconPropTypes;

export function GraduationCapIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </IconWrapper>
  );
}

GraduationCapIcon.propTypes = iconPropTypes;

export function LinkIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </IconWrapper>
  );
}

LinkIcon.propTypes = iconPropTypes;