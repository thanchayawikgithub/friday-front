import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
export default function IPhonePage() {
  return (
    <>
      <div className="px-24">
        <div className="grid grid-cols-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 mt-10 rounded-3xl">
          <div>
            <Image
              radius="lg"
              className="ml-50 ml-48"
              src="../public/iPhone15ProPoster.png"
            />
          </div>
          <div className="text-center h-full">
            <h1 className="text-7xl mt-32">iPhone 15 Pro</h1>
            <h1 className="text-7xl text-stone-400">Taitanium</h1>
            <Button
              className="mt-5 font-bold bg-gradient-to-br from-purple-900 to-pink-800"
              size="lg"
            >
              Buy
            </Button>
            <br />
            <div className="flex mt-5 justify-center">
              <h1 className="text-2xl hover:underline hover:text-pink-500 cursor-pointer">
                More Detail
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-14 mt-8">
          <Card isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                radius="lg"
                src="../public/sdsdssdsg.jpg"
                className="object-cover"
              ></Image>
            </CardBody>
            <CardFooter className="font-bold text-2xl">
              i Phone 15 Pro
            </CardFooter>
          </Card>
          <Card isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                radius="lg"
                src="../public/sdsdssdsg.jpg"
                className="object-cover"
              ></Image>
            </CardBody>
            <CardFooter className="font-bold text-2xl">
              i Phone 15 Pro
            </CardFooter>
          </Card>
          <Card isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                radius="lg"
                src="../public/sdsdssdsg.jpg"
                className="object-cover"
              ></Image>
            </CardBody>
            <CardFooter className="font-bold text-2xl">
              i Phone 15 Pro
            </CardFooter>
          </Card>
          <Card isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                radius="lg"
                src="../public/sdsdssdsg.jpg"
                className="object-cover"
              ></Image>
            </CardBody>
            <CardFooter className="font-bold text-2xl">
              i Phone 15 Pro
            </CardFooter>
          </Card>
          <Card isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                radius="lg"
                src="../public/sdsdssdsg.jpg"
                className="object-cover"
              ></Image>
            </CardBody>
            <CardFooter className="font-bold text-2xl">
              i Phone 15 Pro
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
