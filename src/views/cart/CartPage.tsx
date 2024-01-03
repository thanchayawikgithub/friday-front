import { Card, CardBody, Divider, Image, useSelect } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { cartSelector } from "../../store/slice/cartSlice";

export default function CardPage() {
  const cartState = useSelector(cartSelector);

  return (
    <>
      <div className="px-32">
        <Card className="bg-zinc-100 " shadow="none">
          <CardBody className="grid grid-cols-3 gap-3">
            <Card className="col-span-2" shadow="none">
              <CardBody>
                <p className="font-bold text-xl">My Cart</p>
                <Divider className="mt-3 mb-3"></Divider>
                {cartState.items.map((item) => (
                  <Card key={item.product.id} shadow="none">
                    <CardBody className="flex flex-row gap-3">
                      <Image src={item.product.image} width={200}></Image>
                      <div className="flex flex-col">
                        <p className="font-bold text-xl">{item.product.name}</p>
                        <p className="font-bold text-xl">{item.size}</p>
                      </div>
                    </CardBody>
                    <Divider></Divider>
                  </Card>
                ))}
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <p>Head</p>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
