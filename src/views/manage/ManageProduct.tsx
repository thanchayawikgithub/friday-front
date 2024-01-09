import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";
import { useState, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import {
  categorySelector,
  createCategory,
  getCategories,
} from "../../store/slice/categorySlice";
import { createProduct, getProducts } from "../../store/slice/productSlice";

export default function ManageProduct() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategoryId, setProductCategoryId] = useState<Selection>(
    new Set([])
  );
  const [productImage, setProductImage] = useState<File | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useAppDispatch();
  const categoryState = useSelector(categorySelector);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    // Update state with the selected file
    setProductImage(file || null);
  };
  // const [value, setValue] = useState<Selection>(new Set([]));
  // const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setProductCategoryId(e.target.value);
  // };

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div className="px-32">
        <div className="grid grid-cols-2 gap-4 mt-3">
          <Card shadow="sm">
            <CardHeader>Add Product</CardHeader>
            <CardBody>
              <p>Image</p>
              <input type="file" onChange={handleImageChange} />
              <div className="grid grid-cols-2 gap-4 mt-3">
                <Input
                  label="Name"
                  value={productName}
                  onValueChange={setProductName}
                ></Input>
                <Input
                  label="Description"
                  value={productDescription}
                  onValueChange={setProductDescription}
                ></Input>
                <Input
                  label="Price"
                  value={productPrice}
                  onValueChange={setProductPrice}
                ></Input>
                {/* <Select
                  label="Categoery"
                  selectedKeys={[productCategoryId]}
                  items={categoryState.categories}
                  onChange={handleSelectionChange}
                >
                  {(category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  )}
                </Select> */}
                <Select
                  label="Categoery"
                  selectedKeys={productCategoryId}
                  onSelectionChange={setProductCategoryId}
                >
                  {categoryState.categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                onPress={async () => {
                  const data = {
                    name: productName,
                    description: productDescription,
                    price: +productPrice,
                    image: productImage,
                    categoryId: +[...productCategoryId][0],
                  };

                  await dispatch(createProduct(data));
                  const fileInput =
                    document.querySelector('input[type="file"]');
                  if (fileInput) {
                    (fileInput as HTMLInputElement).value = "";
                  }
                  setProductName("");
                  setProductDescription("");
                  setProductPrice("");
                  setProductImage(null);
                  setProductCategoryId(new Set([]));

                  await dispatch(getProducts());
                }}
              >
                Add
              </Button>
            </CardFooter>
          </Card>
          <Card shadow="sm">
            <CardHeader>Add Category</CardHeader>
            <CardBody>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <Input
                  label="Name"
                  value={categoryName}
                  onValueChange={setCategoryName}
                ></Input>
              </div>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                onPress={async () => {
                  await dispatch(createCategory(categoryName));
                  await dispatch(getCategories());
                  setCategoryName("");
                }}
              >
                Add
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
