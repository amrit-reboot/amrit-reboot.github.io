import type { ProjectItem, WorkItemData, RecentProjectData } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    title: 'REFORGE',
    subtitle: 'FPGA + ESP32 Hybrid Development Board',
    desc: 'A custom development board integrating an ESP32 microcontroller with an iCE40 FPGA. The ESP32 stores and loads FPGA designs through SPI, enabling dynamic hardware configuration. The current prototype performs a custom VGA implementation that renders real-time RGB color bands using the FPGA.',
    tags: ['FPGA', 'ESP32', 'KiCad', 'High-Speed PCB', 'Hardware'],
    color: 'bg-dash-green',
    status: 'Active Bring-Up',
    github: 'https://github.com/kishoriju-vrind/Reforge',
    image: '/reforge_pcb.png',
  },
];

export const CURRENT_WORK_ITEMS: WorkItemData[] = [
  { color: 'bg-dash-orange', title: 'REFORGE', desc: 'Hardware bring-up & testing' },
  { color: 'bg-[#2B3530]', title: 'Learning', desc: 'VLSI design fundamentals' },
];

export const RECENT_PROJECTS: RecentProjectData[] = [
  { title: 'REFORGE', sub: 'FPGA + ESP32 Board', color: 'bg-dash-green', tags: ['FPGA', 'ESP32'] },
];

