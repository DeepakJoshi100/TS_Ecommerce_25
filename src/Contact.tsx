import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Link to="/ContactUs"></Link>
      <div className="flex flex-col grow py-2 my-4 bg-white lg:mx-4 ">
        <div className="flex items-center justify-center my-4">
          <a href="https://codeyogi.io//">
            <div className="flex flex-col items-center justify-center">
              <img src="https://images-ext-1.discordapp.net/external/xoh_hiNNwtxTwCFhE6qt0ipJLoKyBnxy5tL5UYJLtXQ/https/lh5.googleusercontent.com/p/AF1QipPSs_O2AAHhjlFUPLarvn3fGS0OZEV_Y-Y8yND4%3Dw195-h244-n-k-no-nu?width=100&height=120" />
              <h1 className="mb-4 text-xl font-black">CodeYogi</h1>
            </div>
          </a>
        </div>

        <div className="flex place-content-center">
          <a href="https://www.facebook.com/TheCodeYogi">
            <div className="flex items-center justify-center w-12 h-12 rotate-45 bg-red-200  border-4 border-black hover:bg-red-600">
              <img
                src="https://media.discordapp.net/attachments/1001667010620559443/1016896948525080658/8a35c865-031b-4ab9-9e72-0062905008d8.jpg-output.png?width=40&height=40"
                className="rounded-md rotate-315 hover:animate-bounce"
              />
            </div>
          </a>

          <a href="https://www.instagram.com/thecodeyogi/">
            <div className="flex items-center justify-center w-12 h-12 rotate-45 bg-green-200  border-4 border-black hover:bg-green-600">
              <img
                src="https://media.discordapp.net/attachments/1000618596352917565/1003900102492028988/unknown.png?width=40&height=40"
                className="rounded-full rotate-315 hover:animate-bounce"
              />
            </div>
          </a>

          <a href="https://in.linkedin.com/">
            <div className="flex items-center justify-center w-12 h-12 rotate-45 bg-blue-200  border-4 border-black hover:bg-blue-600">
              <img
                src="https://media.discordapp.net/attachments/1001667010620559443/1016896948294385736/c1000e89-3fcf-49ba-b5a1-255d6cddb4a1.jpg-output.png?width=40&height=40"
                className="rounded-full rotate-315 hover:animate-bounce"
              />
            </div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 m-4 mt-12 lg:gap-12">
          <div className="flex flex-col">
            <h1 className="font-bold text-md">Call Us :</h1>
            <h1 className="text-sm">+91 730 0970 666</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-md">Address :</h1>
            <a href="https://www.google.com/maps/place/%E0%A4%95%E0%A5%8B%E0%A4%A1%E0%A4%95%E0%A5%88%E0%A4%82%E0%A4%AA/@30.3636866,78.0833903,17z/data=!3m1!4b1!4m5!3m4!1s0x390cf219e2929267:0x1fb9b058b58b4b38!8m2!3d30.363682!4d78.0876175">
              <h1 className="text-sm hover:underline hover:decoration-4 hover:font-bold">
                IT Park, Dehradun
              </h1>
            </a>
          </div>

          <a href="https://join.codeyogi.io/login">
            <div className="flex flex-col">
              <h1 className="font-bold text-md">E-Mail :</h1>
              <h1 className="text-sm hover:underline hover:decoration-4 hover:font-bold">
                hello@codeyogi.io
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;

//  rotate-45 flex justify-center items-center
