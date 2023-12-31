import {
  mdiFoodDrumstick,
  mdiFoodForkDrink,
  mdiPasta,
  mdiPizza,
  mdiThumbUp,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

export default function MenuPage() {
  const dispatch = useDispatch<AppDispatch>();
  const recommendProducts = useSelector(
    (state: RootState) => state.product.recommendProducts
  );
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
  ];
  return (
    <>
      <div className="px-32">
        <Tabs size="lg" color="primary" className="mt-10">
          {tabs.map((tab) => (
            <Tab
              title={
                <div className="flex items-center space-x-2">
                  <Icon path={tab.icon} size={1} />
                  <span>{tab.name}</span>
                </div>
              }
            >
              <Card className=" bg-zinc-100" shadow="none">
                <CardBody className="grid grid-cols-5 gap-4">
                  {recommendProducts.map((product) => (
                    <Card className="p-0" key={product.id} shadow="md">
                      <Image
                        src={product.image}
                        radius="lg"
                        className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400"
                      ></Image>
                      <CardFooter className="flex flex-col h-full">
                        <p className="font-bold text-2xl">{product.name}</p>
                        <p className="text-xl font-bold">
                          {product.price + " ฿"}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                          <Button
                            className="bg-gradient-to-br from-orange-600   to-orange-500 text-white font-bold"
                            radius="full"
                            size="lg"
                          >
                            Buy Now
                          </Button>
                          <Button
                            className="bg-gradient-to-br from-orange-600   to-orange-500 text-white font-bold"
                            radius="full"
                            size="lg"
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </CardFooter>
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
