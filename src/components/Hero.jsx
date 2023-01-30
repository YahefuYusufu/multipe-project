import React from "react"
import "animate.css"

const styles = {
  container: "bg-black h-screen text-white py-16",
  div: "container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24",
  content:
    "flex flex-col w-full lg:w-1/3 justify-center items-start p-8 animate__animated animate__backInLeft",
  h1: "text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose",
  h2: "text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2",
  p: "text-sm md:text-base text-gray-50 mb-4",
  a: "bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent",
  imgContainer:
    "p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center animate__animated animate__backInRight",
  divIMG: "h-48 flex flex-wrap content-center",
  img1: "mt-28 hidden xl:block",
  img2: "inline-block mt-24 md:mt-0 p-8 md:p-0",
  img3: "mt-28 hidden lg:block",
}

const Hero = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.content}>
            <h1 className={styles.h1}>Multiple Projects</h1>
            <h2 className={styles.h2}>Imagination : The Timeless Infinity</h2>
            <p className={styles.p}>
              You can find all my small react projects here.
            </p>
            <a
              href="https://github.com/YusufYakup/multipe-project"
              target="_blank"
              className={styles.a}
            >
              Code Source
            </a>
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.divIMG}>
              <div>
                <img
                  className={styles.img1}
                  src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                />
              </div>
              <div>
                <img
                  className={styles.img2}
                  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                />
              </div>
              <div>
                <img
                  className={styles.img3}
                  src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
