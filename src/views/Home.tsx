import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getAllCustomer } from "../store/slice/customerSlice";
import { authSelector, getCurrentCustomer } from "../store/slice/authSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector(authSelector);
  useEffect(() => {}, []);
  return (
    <>
      <div className="px-32">
        <div className="grid grid-cols-2 mt-16">
          <div className="my-auto">
            <p className="text-6xl ">Every Day Feels Like Friday</p>
            <p className="text-6xl text-orange-600 mt-3">With Our Pizzas!</p>
            <p className="text-slate-500 text-xl mt-3">
              Elevate your everyday with{" "}
              <span className="text-orange-600 font-bold">Friday</span> pizzas –
              where every bite feels like a weekend celebration.
            </p>
            <p className="text-slate-500 text-xl">
              Order now for a daily dose of delicious delight!
            </p>
            <Button
              radius="full"
              className="bg-gradient-to-br from-orange-600  to-orange-500 text-white font-bold mt-5 text-2xl h-16"
              size="lg"
            >
              Order Now{" "}
              <Icon path={mdiChevronRight} size={3} className="-ml-3"></Icon>
            </Button>
          </div>
          <div className="mx-auto">
            <Image src="./home/pizza2.png" width={700}></Image>
          </div>
        </div>
        {/* <div className="mt-32">
          <p className="text-5xl font-bold text-center text-orange-600">
            Recommend
          </p>
          <div className="grid grid-cols-4 mt-16 gap-16">
            {recommendProducts.map((product) => (
              <Card className="p-0" key={product.id} shadow="md">
                <Image
                  src={product.image}
                  radius="lg"
                  className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400"
                ></Image>
                <CardFooter className="flex flex-col h-full">
                  <p className="font-bold text-2xl">{product.name}</p>
                  <p className="text-xl font-bold">{product.price + " ฿"}</p>
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
          </div>
        </div> */}
      </div>
    </>
  );
}
