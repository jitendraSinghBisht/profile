import { FloatingDock } from './ui/floating-dock';
import { IconHome, IconUser, IconBriefcase, IconCode, IconMail } from '@tabler/icons-react';

type Page = 'home' | 'about' | 'projects' | 'skills' | 'contact';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: IconHome },
    { id: 'about', label: 'About', icon: IconUser },
    { id: 'projects', label: 'Projects', icon: IconBriefcase },
    { id: 'skills', label: 'Skills', icon: IconCode },
    { id: 'contact', label: 'Contact', icon: IconMail },
  ];

  const dockItems = menuItems.map((item) => {
    const Icon = item.icon;
    const isActive = currentPage === item.id;
    return {
      title: item.label,
      icon: <Icon className={isActive ? "h-full w-full text-white" : "h-full w-full text-gray-400"} />,
      href: "#",
      onClick: () => setCurrentPage(item.id as Page),
      active: isActive
    };
  });

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <FloatingDock
        items={dockItems}
        desktopClassName="bg-gray-900 border border-gray-800"
        mobileClassName="translate-y-20"
      />
    </div>
  );
}
