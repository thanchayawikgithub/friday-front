import { mdiEmailOutline, mdiLockOutline } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import CreateCustomerData from "../../types/Customer/CreateCustomerData";
import { createCustomer } from "../../store/slice/customerSlice";
import { signIn } from "../../store/slice/authSlice";

interface SignInModalProps {
  isOpenSignIn: boolean;
  onOpenChangeSignIn: () => void;
  onOpenSignUp: () => void;
}

export default function SignInModal({
  isOpenSignIn,
  onOpenChangeSignIn,
  onOpenSignUp,
}: SignInModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  return (
    <>
      <Modal isOpen={isOpenSignIn} onOpenChange={onOpenChangeSignIn}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody>
                <Tabs
                  fullWidth
                  size="lg"
                  color="secondary"
                  className="font-bold"
                >
                  <Tab title="Sign In">
                    <Input
                      autoFocus
                      label="Email"
                      placeholder="Enter your email"
                      endContent={<Icon path={mdiEmailOutline} size={1} />}
                      value={signInEmail}
                      onValueChange={setSignInEmail}
                    ></Input>
                    <Input
                      value={signInPassword}
                      onValueChange={setSignInPassword}
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      endContent={<Icon path={mdiLockOutline} size={1} />}
                      className="mt-5"
                    ></Input>
                    <Button
                      onPress={async () => {
                        const signIndata = {
                          email: signInEmail,
                          password: signInPassword,
                        };
                        await dispatch(signIn(signIndata));
                        onClose();
                      }}
                      className="w-full h-12 bg-gradient-to-br from-orange-600  to-orange-500 text-white font-bold mt-5"
                    >
                      Sign In
                    </Button>
                    {/* <Divider className="mt-2"></Divider>
                    <Button
                      onPress={() => {
                        onClose();
                        onOpenSignUp();
                      }}
                      className="w-full h-12 font-bold border-orange-600 text-orange-600 border-3 mt-2"
                      variant="bordered"
                    >
                      Sign Up
                    </Button> */}
                  </Tab>
                  <Tab title="Sign Up">
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        value={firstname}
                        onValueChange={setFirstname}
                        label="Firstname"
                        placeholder="Enter your firstname"
                        // endContent={<Icon path={mdiAccountOutline} size={1} />}
                      ></Input>
                      <Input
                        value={lastname}
                        onValueChange={setLastname}
                        label="Lastname"
                        placeholder="Enter your lastname"
                        // endContent={<Icon path={mdiAccountOutline} size={1} />}
                      ></Input>
                    </div>
                    <Input
                      value={email}
                      onValueChange={setEmail}
                      autoFocus
                      label="Email"
                      placeholder="Enter your email"
                      endContent={<Icon path={mdiEmailOutline} size={1} />}
                      className="mt-5"
                    ></Input>
                    <Input
                      value={password}
                      onValueChange={setPassword}
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      endContent={<Icon path={mdiLockOutline} size={1} />}
                      className="mt-5"
                    ></Input>

                    <Button
                      onPress={() => {
                        const createCustomerData: CreateCustomerData = {
                          firstname: firstname,
                          lastname: lastname,
                          email: email,
                          password: password,
                        };
                        dispatch(createCustomer(createCustomerData));
                      }}
                      className="w-full h-12 bg-gradient-to-br from-orange-600  to-orange-500 text-white font-bold mt-5"
                    >
                      Sign Up
                    </Button>
                  </Tab>
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
