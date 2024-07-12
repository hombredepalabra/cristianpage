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

export function ArielsIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <line x1="6" y1="8" x2="18" y2="8" />
      <line x1="6" y1="12" x2="18" y2="12" />
      <line x1="6" y1="16" x2="14" y2="16" />
    </IconWrapper>
  );
}
ArielsIcon.propTypes = iconPropTypes;

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

export function ReactIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 6.5c3.69 0 6.67 1.35 6.67 3s-2.98 3-6.67 3-6.67-1.35-6.67-3 2.98-3 6.67-3z" />
      <path d="M12 17.5c3.69 0 6.67-1.35 6.67-3s-2.98-3-6.67-3-6.67 1.35-6.67 3 2.98 3 6.67 3z" />
      <path d="M6.5 12c0 3.69 1.35 6.67 3 6.67s3-2.98 3-6.67-1.35-6.67-3-6.67-3 2.98-3 6.67z" />
      <path d="M17.5 12c0 3.69-1.35 6.67-3 6.67s-3-2.98-3-6.67 1.35-6.67 3-6.67 3 2.98 3 6.67z" />
    </IconWrapper>
  );
}
ReactIcon.propTypes = iconPropTypes;

export function NodeIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M12 21.35l-1.45-.82C5.4 17.18 2 13.19 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 4.69-3.4 8.68-8.55 12.03L12 21.35z" />
    </IconWrapper>
  );
}
NodeIcon.propTypes = iconPropTypes;

export function AstroIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8l-4 4-4-4" />
      <path d="M12 16V8" />
    </IconWrapper>
  );
}
AstroIcon.propTypes = iconPropTypes;

export function JavaScriptIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M12 11v6m4-6v6" />
      <path d="M8 11v3a2 2 0 0 0 4 0" />
    </IconWrapper>
  );
}
JavaScriptIcon.propTypes = iconPropTypes;

export function CSSIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M4 2l2 20h12l2-20H4z" />
      <path d="M9 6h8l-1 4H9v4h6l-1 4H9v-4" />
    </IconWrapper>
  );
}
CSSIcon.propTypes = iconPropTypes;

export function HTMLIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M4 2l2 20h12l2-20H4z" />
      <path d="M15 7H9v4h3v4H9v4h6" />
    </IconWrapper>
  );
}
HTMLIcon.propTypes = iconPropTypes;

export function MySQLIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M21 5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5z" />
      <path d="M7 7h10" />
      <path d="M7 11h10" />
      <path d="M7 15h10" />
    </IconWrapper>
  );
}
MySQLIcon.propTypes = iconPropTypes;

export function PythonIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M12 2c-4 0-6 2-6 5v3c0 1.1-.9 2-2 2H2v4h2c1.1 0 2 .9 2 2v3c0 3 2 5 6 5 4 0 6-2 6-5v-3c0-1.1.9-2 2-2h2v-4h-2c-1.1 0-2-.9-2-2V7c0-3-2-5-6-5z" />
      <circle cx="9" cy="8" r="1" />
      <circle cx="15" cy="16" r="1" />
    </IconWrapper>
  );
}
PythonIcon.propTypes = iconPropTypes;

export function PHPIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M12 2c-5.52 0-10 3.36-10 7.5s4.48 7.5 10 7.5 10-3.36 10-7.5S17.52 2 12 2z" />
      <path d="M6.5 10h2v1h-2" />
      <path d="M15.5 10h2v1h-2" />
      <path d="M9 11.5h6" />
    </IconWrapper>
  );
}
PHPIcon.propTypes = iconPropTypes;

export function GitIcon(props) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="12" y1="8" x2="12" y2="2" />
      <line x1="16" y1="12" x2="22" y2="12" />
      <line x1="8" y1="12" x2="2" y2="12" />
    </IconWrapper>
  );
}
GitIcon.propTypes = iconPropTypes;

export function GithubIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </IconWrapper>
  );
}
GithubIcon.propTypes = iconPropTypes;

export function LinkedinIcon(props) {
  return (
    <IconWrapper {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconWrapper>
  );
}
LinkedinIcon.propTypes = iconPropTypes;

export function InstagramIcon(props) {
  return (
    <IconWrapper {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </IconWrapper>
  );
}
InstagramIcon.propTypes = iconPropTypes;