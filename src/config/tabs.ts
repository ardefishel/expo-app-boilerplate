import { IconName } from "@/components/ui/ion-icon";

interface TabItem {
  name: string;
  title: string;
  icon: IconName;
}

export const TabNavigationItems: TabItem[] = [
  {
    name: "home",
    title: "Home",
    icon: "home",
  },
  {
    name: "page-1",
    title: "Page 1",
    icon: "navigate",
  },
  {
    name: "page-2",
    title: "Page 2",
    icon: "map",
  },
  {
    name: "account",
    title: "Account",
    icon: "person",
  },
]
