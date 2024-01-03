import {
  mdiCurrencyBdt,
  mdiCurrencyThb,
  mdiFoodDrumstick,
  mdiFoodForkDrink,
  mdiPasta,
  mdiPizza,
  mdiShopping,
  mdiThumbUp,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addToCart } from "../../store/slice/cartSlice";
import CartItem from "../../types/CartItem";
import { productSelector } from "../../store/slice/productSlice";

export default function MenuPage() {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector(productSelector);
  const tabs = [
    {
      name: "Recommend",
      icon: mdiThumbUp,
    },
    {
      name: "Pizza",
      icon: mdiPizza,
    },
    {
      name: "Pasta",
      icon: mdiPasta,
    },
    {
      name: "Appetizer",
      icon: mdiFoodForkDrink,
    },
  ];
  return (
    <>
      <div className="px-32">
        <Tabs size="lg" color="primary" className="mt-5">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              title={
                <div className="flex items-center space-x-2">
                  <Icon path={tab.icon} size={1} />
                  <span>{tab.name}</span>
                </div>
              }
            >
              <Card className="bg-zinc-100 " shadow="none">
                <CardBody className="grid grid-cols-2 gap-3">
                  {productState.recommendProducts.map((product) => (
                    <Card key={product.id} shadow="sm">
                      <CardBody className="grid grid-cols-2 p-4 gap-4">
                        <Image src={product.image} radius="lg"></Image>
                        <div className="flex flex-col">
                          <p className="text-3xl font-bold">{product.name}</p>
                          <p className="text-lg mt-3">{product.desciption}</p>
                          {/* <div className="flex mt-auto gap-3">
                            <Select
                              variant="bordered"
                              label="Size"
                              defaultSelectedKeys={"m"}
                              size="md"
                              radius="md"
                            >
                              <SelectItem key={"m"} value={"m"}>
                                Medium
                              </SelectItem>
                              <SelectItem key={"l"} value={"l"}>
                                Large
                              </SelectItem>
                            </Select>
                            <Button
                              className="bg-gradient-to-br from-orange-600  to-orange-500 text-white h-full text-lg"
                              fullWidth
                              onPress={() => {
                                const cartItem: CartItem = {
                                  product: product,
                                  size: "l",
                                  price: 450,
                                };
                                dispatch(addToCart(cartItem));
                              }}
                            >
                              <div className="flex">
                                <p className="ml-0 font-bold">
                                  {product.price} ฿
                                </p>
                              </div>
                            </Button>
                          </div> */}
                          <div className="flex mt-auto gap-[0.05rem]">
                            <Button
                              fullWidth
                              className="rounded-r-none bg-orange-600 text-white"
                              size="lg"
                            >
                              Medium 490 ฿
                            </Button>
                            <Button
                              fullWidth
                              className="rounded-l-none bg-orange-600 text-white"
                              size="lg"
                            >
                              Large 590 ฿
                            </Button>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
}
