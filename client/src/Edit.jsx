import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function Edit() {
  var ig = undefined,
    igdiv = undefined,
    Gojo = undefined;

  const iref = useRef(0);
  const tref = useRef(0);
  const { slug } = useParams();
  const router = useNavigate();
  useLayoutEffect(() => {
    Gojo = JSON.parse(localStorage.getItem(slug));
    iref.current.value = Gojo.title;
    tref.current.value = Gojo.content;
    ig = Gojo.ig;
    igdiv = document.querySelector(".uploadimg");
    igdiv.addEventListener("change", function (event) {
      if (!event.target.files[0]) return;
      ig = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function (e) {
        ig = e.target.result;
      };
      reader.readAsDataURL(ig);
    });
  }, []);

  function Add() {
    const title = iref.current.value,
      content = tref.current.value;
    if (!title || !content || !ig) return;
    localStorage.setItem(
      slug,
      JSON.stringify({ ...Gojo, title: title, content: content, ig: ig })
    );
    let timerInterval;
    Swal.fire({
      title: "Processing the Changes",
      html: "Time Left : <b></b> ms.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setTimeout(() => {
      router("/All");
    }, 2200);
  }
  return (
    <>
      <div class="main h-full w-full bg-white flex justify-center items-center font-semibold">
        <div class="bcons flex flex-col h-[90%] w-[60%] justify-center items-center rounded-[21px] gap-7 shadow-2xl p-11">
          <div class="title relative bottom-[10px]">
            <input
              ref={iref}
              type="text"
              class="btitle p-3 border-[3px] rounded-[15px] border-gray-300 focus:border-none w-[350px]"
              placeholder="Title..."
            />
          </div>
          <div class="maincons flex flex-col justify-center items-center gap-5">
            <textarea
              ref={tref}
              class="newblog rounded-[15px] border-[3px] p-3 border-gray-300"
              id=""
              rows="10"
              cols="100"
              placeholder="Hi , I am Gojo"
            ></textarea>
            {/* <label for="file-upload" class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                            Upload Image
                          </label> */}
            <input
              id="file-upload"
              type="file"
              class="uploadimg"
              accept="image/*"
            />

            <button
              class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-[200px]"
              onClick={Add}
            >
              Edit Blog
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
