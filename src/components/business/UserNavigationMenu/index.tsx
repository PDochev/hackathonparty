import { useUserStore } from "@/store";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu";
import { ListItem } from "./ListItem";

export function UserNavigationMenu() {
  const username = useUserStore(({ name }) => name);

  return (
    <NavigationMenu className="list-none">
      <NavigationMenuItem>
        <NavigationMenuTrigger>{username}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="list-none">
            <ListItem href="/badges">Badges</ListItem>
            <ListItem href="/files">Files</ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
