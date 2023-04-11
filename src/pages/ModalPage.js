import { useState } from 'react';
import Modal from "../components/Modal"
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div>
    <Button onClick={handleClose} primary>I accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        There is a Important agreement for you to accept
      </p>
    </Modal>

  return (
    <div>
      <Button onClick={handleClick} primary>Open Modal</Button>
      {showModal && modal}
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis consectetur mi, vitae laoreet nibh mattis vel. Mauris vitae ultricies est. Integer a consectetur est. Praesent blandit mattis eros et ullamcorper. Nam porttitor ante nec faucibus imperdiet. Ut vestibulum blandit tempor. Aenean tempor nibh quis magna lacinia consequat. Fusce et dui vitae felis aliquet commodo. Maecenas tincidunt risus vitae massa mollis, ac tristique libero consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean placerat enim laoreet arcu posuere malesuada. Aenean dapibus sapien sed dui ullamcorper pharetra. Sed eu ex vestibulum, porttitor elit sit amet, rhoncus neque. Integer hendrerit suscipit viverra.
      </p>
    </div>
  );
};

export default ModalPage
