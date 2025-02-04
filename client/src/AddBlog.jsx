import React, { useLayoutEffect, useRef } from 'react'
import Swal from 'sweetalert2'
export default function AddBlog() {
    var ig = undefined, igdiv = undefined
    const iref = useRef(0);
    const tref = useRef(0);
    useLayoutEffect(() => {
        ig = undefined
        igdiv = document.querySelector(".uploadimg")
        //    console.log(igdiv)
        igdiv.addEventListener("change", function (event) {
            if (!event.target.files[0]) return
            ig = event.target.files[0]
            let reader = new FileReader();
            reader.onload = function (e) {
                ig = e.target.result
            }
            reader.readAsDataURL(ig);
        })
    }, [])


    function Add() {
        const title = iref.current.value, content = tref.current.value;
        if (!title || !content || !ig) return;
        let s = parseInt(localStorage.getItem("bcount")) || 0
        s += 1;
        localStorage.setItem('bcount', s);
        localStorage.setItem(`Blog${s}`, JSON.stringify({ title: title, content: content, ig: ig, val: 0}))
        iref.current.value = null;
        tref.current.value = null;
        igdiv.value = null
        Swal.fire({
            title: "Blog Added",
            text: "",
            icon: "success"
        });
        ig = undefined
    }
    return (
        <>
            <div class="main h-full w-full bg-white flex justify-center items-center font-semibold">
                <div class="bcons flex flex-col h-[90%] w-[60%] justify-center items-center rounded-[21px] gap-7 shadow-2xl p-11">
                    <div class="title relative bottom-[10px]">
                        <input ref={iref} type="text" class="btitle p-3 border-[3px] rounded-[15px] border-gray-300 focus:border-none w-[350px]" placeholder="Title..." />
                    </div>
                    <div class="maincons flex flex-col justify-center items-center gap-5">
                        <textarea ref={tref} class="newblog rounded-[15px] border-[3px] p-3 border-gray-300" id="" rows="10" cols="100" placeholder="Hi , I am Gojo"></textarea>
                        {/* <label for="file-upload" class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                            Upload Image
                          </label> */}
                        <input id="file-upload" type="file" class="uploadimg" accept="image/*" />
                        <button class="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-[200px]" onClick={Add}>Add Blog</button>
                    </div>
                </div>
            </div>
        </>
    )
}
