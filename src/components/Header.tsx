import {
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import Icon from "@mdi/react";
import {
  mdiHeartOutline,
  mdiShoppingOutline,
  mdiFormatListBulletedSquare,
  mdiEmailOutline,
  mdiLockOutline,
} from "@mdi/js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import SignInModal from "./modal/SignInModal";
import SignUpModal from "./modal/SignUpModal";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
export default function Header() {
  const {
    isOpen: isOpenSignIn,
    onOpen: onOpenSignIn,
    onOpenChange: onOpenChangeSignIn,
  } = useDisclosure();

  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onOpenChange: onOpenChangeSignUp,
  } = useDisclosure();

  const navigate = useNavigate();
  const currentRoute = useLocation();

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Menu",
      path: "/menu",
    },
  ];
  return (
    <>
      <SignUpModal
        isOpenSignUp={isOpenSignUp}
        onOpenChangeSignUp={onOpenChangeSignUp}
        onOpenSignIn={onOpenSignIn}
      />
      <SignInModal
        isOpenSignIn={isOpenSignIn}
        onOpenChangeSignIn={onOpenChangeSignIn}
        onOpenSignUp={onOpenSignUp}
      />
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="pt-3 pb-3 px-[6.5rem]"
      >
        <div className="my-auto flex flex-row gap-10">
          <FontAwesomeIcon
            icon={faPizzaSlice}
            size="2x"
            className="mt-1 -rotate-90"
            color="#ea580c"
          />
          <h1 className="text-4xl text-center font-medium text-orange-600 -ml-8">
            FRIDAY
          </h1>
          {/* <Button
            variant="bordered"
            className="text-2xl hover:text-orange-600 border-transparent"
            disableRipple
          >
            Home
          </Button> */}
          {/* <p
            className="text-2xl hover:text-orange-600 cursor-pointer mt-1"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className="text-2xl hover:text-orange-600 cursor-pointer mt-1"
            onClick={() => navigate("/menu")}
          >
            Menu
          </p> */}
          {menus.map((menu) => (
            <p
              className={classNames({
                "text-2xl hover:text-orange-600 cursor-pointer mt-1": true,
                "text-orange-600": currentRoute.pathname === menu.path,
              })}
              onClick={() => navigate(menu.path)}
            >
              {menu.name}
            </p>
          ))}
        </div>

        <div className="flex flex-row gap-5 justify-end my-auto">
          <Badge
            content={99}
            shape="circle"
            className="bg-orange-600 text-white"
          >
            <Button
              isIconOnly
              variant="light"
              className="mt-1 hover:text-orange-600"
            >
              <Icon path={mdiShoppingOutline} size={1.3}></Icon>
            </Button>
          </Badge>
          <Button
            onPress={onOpenSignIn}
            className="bg-gradient-to-br from-orange-600  to-orange-500 text-white rounded-full text-lg font-bold"
            size="lg"
          >
            Sign In
          </Button>
        </div>
      </Navbar>
    </>
  );
}
