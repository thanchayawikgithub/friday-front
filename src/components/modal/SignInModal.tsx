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
  useDisclosure,
} from "@nextui-org/react";

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
  return (
    <>
      <Modal isOpen={isOpenSignIn} onOpenChange={onOpenChangeSignIn}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-center text-orange-600">
                Sign In
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  endContent={<Icon path={mdiEmailOutline} size={1} />}
                ></Input>
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  endContent={<Icon path={mdiLockOutline} size={1} />}
                  className="mt-2"
                ></Input>
                <Button
                  onPress={onClose}
                  className="w-full h-12 bg-gradient-to-br from-orange-600  to-orange-500 text-white font-bold mt-2"
                >
                  Sign In
                </Button>
                <Divider className="mt-2"></Divider>
                <Button
                  onPress={() => {
                    onClose();
                    onOpenSignUp();
                  }}
                  className="w-full h-12 font-bold border-orange-600 text-orange-600 border-3 mt-2"
                  variant="bordered"
                >
                  Sign Up
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
