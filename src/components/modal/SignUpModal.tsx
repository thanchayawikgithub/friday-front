import {
  mdiAccount,
  mdiAccountOutline,
  mdiEmailOutline,
  mdiLockOutline,
} from "@mdi/js";
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
} from "@nextui-org/react";
import { easeIn } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { createCustomer } from "../../store/slice/customerSlice";
import CreateCustomerData from "../../types/Customer/CreateCustomerData";

interface SignUpModalProps {
  isOpenSignUp: boolean;
  onOpenChangeSignUp: () => void;
  onOpenSignIn: () => void;
}
export default function SignUpModal({
  isOpenSignUp,
  onOpenChangeSignUp,
  onOpenSignIn,
}: SignUpModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Modal isOpen={isOpenSignUp} onOpenChange={onOpenChangeSignUp}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-center text-orange-600">
                Sign Up
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    value={firstname}
                    onValueChange={setFirstname}
                    label="Firstname"
                    placeholder="Enter your firstname"
                    // endContent={<Icon path={mdiAccountOutline} size={1} />}
                    className="mt-2"
                  ></Input>
                  <Input
                    value={lastname}
                    onValueChange={setLastname}
                    label="Lastname"
                    placeholder="Enter your lastname"
                    // endContent={<Icon path={mdiAccountOutline} size={1} />}
                    className="mt-2"
                  ></Input>
                </div>
                <Input
                  value={email}
                  onValueChange={setEmail}
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  endContent={<Icon path={mdiEmailOutline} size={1} />}
                ></Input>
                <Input
                  value={password}
                  onValueChange={setPassword}
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  endContent={<Icon path={mdiLockOutline} size={1} />}
                  className="mt-2"
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
                  className="w-full h-12 bg-gradient-to-br from-orange-600  to-orange-500 text-white font-bold mt-2"
                >
                  Sign Up
                </Button>
                <Divider className="mt-2"></Divider>
                <Button
                  onPress={() => {
                    onClose();
                    onOpenSignIn();
                  }}
                  className="w-full h-12 font-bold border-orange-600 text-orange-600 border-3 mt-2"
                  variant="bordered"
                >
                  Sign In
                </Button>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
