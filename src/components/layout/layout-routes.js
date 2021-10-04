import {
  Home as HomeIcon,
  Group as GroupIcon,
  Folder as FolderIcon,
  Description as DescriptionIcon,
  Security as SecurityIcon,
  BusinessCenter as BusinessCenterIcon,
  School as SchoolIcon,
} from '@material-ui/icons';
import RostersIcon from '../components/icons/RostersIcon';
import StudentsIcon from '../components/icons/StudentsIcon';
import WorkersIcon from '../components/icons/WorkersIcon';

export const routes = [
  {
    icon: HomeIcon,
    text: 'Home',
    pageTitle: 'Dashboard',
    path: '/home',
  },
  {
    icon: SchoolIcon,
    text: 'Classes',
    path: '/classes',
  },
  {
    icon: GroupIcon,
    text: 'Contractors',
    path: '/contractors',
  },
  {
    icon: DescriptionIcon,
    text: 'Doctypes',
    path: '/doctypes',
  },
  {
    icon: StudentsIcon,
    text: 'Students',
    path: '/students',
  },
  {
    icon: WorkersIcon,
    text: 'Workers',
    path: '/workers',
  },
  {
    icon: FolderIcon,
    text: 'Job Orders',
    path: '/job-orders',
  },
  {
    icon: RostersIcon,
    text: 'Roster',
    path: '/roster',
    disabled: true,
  },
  {
    icon: BusinessCenterIcon,
    text: 'Projects',
    path: '/projects',
    disabled: true,
  },
  {
    icon: SecurityIcon,
    text: 'Admin',
    path: '/admin',
    disabled: true,
  },
];
