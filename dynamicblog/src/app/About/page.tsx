import Image from "next/image";
import Header from "../../../public/Images/header.jpg"
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src={Header}
          alt="About Us"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.contentSection}>
        <h1 className="font-bold text-3xl">About Us</h1>
        <p>
          Welcome to Blog! We are dedicated to providing you with
          insightful, engaging, and inspiring content. Our mission is to create
          a space where readers can explore, learn, and connect with ideas that
          matter to them.
        </p>
        <br />
        <p>
          Whether you`re here to discover new perspectives, gain knowledge, or
          simply enjoy a great read, we are here for you. Thank you for being
          part of our journey.
        </p>
      </div>
    </div>
  );
}

