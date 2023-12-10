"use client";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Banner({ lang, dataBanner, dataDesign }) {
  const boxRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const list = document.querySelectorAll(".tissue");
      const scroll_word = document.querySelector(".scrolling-words-container")
      const tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top top",
          end:"+=2000 center",
          pinSpacing:'margin',
          pin: boxRef.current,
          onUpdate: (self) => {
            scroll_word.style.opacity ='0'
            list.forEach((e, index) => {
              if (
                self.progress >= index * 0.0103092783505155 &&
                self.progress < (index + 1) * 0.0103092783505155
              ) {
                e.style.zIndex = `${10 + index}`;
                e.style.opacity = 1;
              } else {
                e.style.zIndex = 0;
                e.style.opacity = 0;
              }
            });
          },
          onLeave:(self) => {
            scroll_word.style.opacity ='1'
          }
        },
      });
    },boxRef)
      return () => ctx.revert();
    }, [lang]);
  return (
    <>
      <section
        ref={boxRef}
        className="banner banner_home banner_home_page !max-w-[100%] !w-full md:h-[100vh] relative max-md:flex flex-col md:justify-center items-center frame"
      >
        <div className="overlay_banner_mobile md:hidden"></div>
        <div className="flex sticky_box items-center sticky max-md:pt-[10rem] max-md:w-full top-0 md:h-[95vh] justify-between  md:border-b border-solid border-[#888] max-md:flex-col">
          <div className="flex justify-center">
            <div className="lg:w-[48.02rem] lg:h-[45.8rem]  md:w-[45rem] md:h-[45rem] w-[74.3464rem] h-[74rem] relative">
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748254/Tissues_050000_zwr9hc.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue active"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748252/Tissues_050001_ilfduc.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748251/Tissues_050002_het6rt.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748249/Tissues_050003_z83p4x.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748247/Tissues_050004_surnyu.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748245/Tissues_050005_dndvos.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748244/Tissues_050006_sc9eiy.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748242/Tissues_050007_hrv5gd.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748240/Tissues_050008_tglimw.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748238/Tissues_050009_mxe7ft.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748237/Tissues_050010_eqfxke.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748235/Tissues_050011_vqmbde.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748233/Tissues_050012_cjk9gl.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748232/Tissues_050013_gjclca.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748230/Tissues_050014_okngzq.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748229/Tissues_050015_n39csq.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748226/Tissues_050016_yyfwp4.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748225/Tissues_050017_tcicdc.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748222/Tissues_050018_oaiadn.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748221/Tissues_050019_lvsfih.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748220/Tissues_050020_vv4cyb.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748218/Tissues_050021_btkdce.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748217/Tissues_050022_b7tn3j.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748215/Tissues_050023_tkgfej.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748213/Tissues_050024_khbbcj.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748182/Tissues_050025_au4tuj.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748078/Tissues_050026_cb5gvz.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748013/Tissues_050027_zm4axk.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748014/Tissues_050028_or5ryx.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748014/Tissues_050029_hzo2x1.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748016/Tissues_050030_thwcue.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748016/Tissues_050031_bq1h2b.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748018/Tissues_050032_qctew5.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748019/Tissues_050033_tpjqdg.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748020/Tissues_050034_qyv1ig.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748021/Tissues_050035_loifym.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748022/Tissues_050036_fegbjj.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748024/Tissues_050037_tya8gv.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748025/Tissues_050038_gbikgc.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748026/Tissues_050039_npzgbs.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748028/Tissues_050040_n7f9oy.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748030/Tissues_050041_owvkvc.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748031/Tissues_050042_iwdsu8.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748032/Tissues_050043_u1wyvk.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748034/Tissues_050044_j5qvbf.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748035/Tissues_050045_l5mqri.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748037/Tissues_050046_lfqdkz.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748038/Tissues_050047_y70dyn.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748659/Tissues_050048_ockogb.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748040/Tissues_050049_xuszk9.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748042/Tissues_050050_yz45qq.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748043/Tissues_050051_kkcp7i.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748045/Tissues_050052_r5hnp0.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748047/Tissues_050053_jkpara.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748047/Tissues_050054_dwg7td.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748049/Tissues_050055_qyxgbr.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748051/Tissues_050056_blddbl.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748052/Tissues_050057_z9gef9.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748054/Tissues_050058_xmkggz.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748055/Tissues_050059_jepsss.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748057/Tissues_050060_ua4ugy.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748058/Tissues_050061_zm3ggm.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748060/Tissues_050062_dlwird.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748062/Tissues_050063_pkdjwg.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748064/Tissues_050064_rxkebf.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748065/Tissues_050065_kon14c.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748067/Tissues_050066_wgajeb.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748068/Tissues_050067_mvwaxf.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748070/Tissues_050068_kc3vlp.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748071/Tissues_050069_grmmya.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748073/Tissues_050070_ytj2f1.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748074/Tissues_050071_vozd38.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748075/Tissues_050072_xki56y.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701748077/Tissues_050073_gjoao9.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749912/Tissues_050074_hapfyv.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749909/Tissues_050075_jsr84n.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749911/Tissues_050076_o8vdld.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749912/Tissues_050077_pppmzc.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749913/Tissues_050078_y4xypo.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749917/Tissues_050079_zbhnnn.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749928/Tissues_050080_qeseir.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749922/Tissues_050081_tjfbco.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749924/Tissues_050082_l9noqd.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749923/Tissues_050083_t2rqdr.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749928/Tissues_050084_aaafg8.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749927/Tissues_050085_jfshnq.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749935/Tissues_050086_qv3bfd.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749933/Tissues_050087_yytmwa.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749935/Tissues_050088_anoyir.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749935/Tissues_050089_l7zwbe.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749941/Tissues_050090_uzypjw.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749943/Tissues_050091_fccmwy.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749944/Tissues_050092_pj9a8x.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749949/Tissues_050093_r0a8q0.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749949/Tissues_050094_l6kyxy.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749949/Tissues_050095_blwthf.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749950/Tissues_050096_omc7mh.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
              <img
                alt="tissue-picture"
                src="https://res.cloudinary.com/dj9q6wack/image/upload/v1701749957/Tissues_050097_su5hjx.png"
                fetchPriority="high"
                className="absolute top-0 left-0 object-contain w-full h-full tissue"
              />
            </div>
          </div>
          <div className="flex max-md:flex-row-reverse justify-center items-center md:mr-[12.03rem] ">
            <h2 className="lg:text-[3.4375rem] text-[4.5rem] max-md:text-[6.93333rem] max-md:w-[43rem] leading-[1.2] font-bold md:w-[30rem] lg:w-[25rem] text-start md:text-end">
              {dataBanner?.textfeature}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:w-[5.96302rem] md:w-[7rem] md:h-[9.7rem] lg:h-[7.69896rem] mw-[11.20427rem] h-[13.9rem]"
              viewBox="0 0 115 149"
              fill="none"
            >
              <path
                d="M90.6716 113.444L115 144.819H93.2724L80.3632 128.292C75.1616 134.719 69.9058 139.41 64.5823 142.351C57.8907 146.153 49.9664 148.061 40.8094 148.061C26.0173 148.061 15.0587 143.083 7.93354 133.112C2.97576 126.169 0.510437 118.393 0.510437 109.8C0.510437 99.5717 2.5694 91.2941 6.68734 84.9676C10.8053 78.641 19.0276 71.7406 31.3408 64.2664C26.0173 57.2513 22.4005 51.8716 20.477 48.1417C18.0659 43.2927 16.8603 38.0421 16.8603 32.4042C16.8603 23.4237 19.583 15.9782 25.0284 10.082C31.097 3.52593 39.1432 0.240723 49.1671 0.240723C59.1911 0.240723 67.1831 3.38247 72.7505 9.68032C77.5728 15.06 79.9975 21.8456 79.9975 30.0371C79.9975 39.0177 77.207 46.9223 71.6397 53.7366C68.4835 57.6673 63.0381 62.3871 55.2899 67.896L80.3632 99.2704C81.9075 94.8806 82.9912 91.3371 83.6143 88.6545C84.2374 85.9718 84.9417 81.998 85.7545 76.7617H101.725C101.725 81.6106 100.763 87.1481 98.8534 93.3886C96.9298 99.6147 94.2071 106.3 90.6852 113.444H90.6716ZM71.6397 116.199L40.8094 76.3744C32.0858 82.2705 26.3288 86.9043 23.5384 90.2468C19.3256 95.2249 17.226 101.322 17.226 108.538C17.226 116.6 20.4093 122.869 26.7894 127.317C31.5575 130.659 36.5966 132.338 41.9201 132.338C54.3688 132.338 64.2707 126.958 71.6397 116.213V116.199ZM46.5663 56.204C51.8899 52.4741 55.6014 49.2606 57.7146 46.5636C61.6699 41.8438 63.6612 36.7223 63.6612 31.2278C63.6612 25.7334 61.9544 21.2288 58.5544 18.5461C56.0078 16.509 52.8923 15.5048 49.1807 15.5048C43.1121 15.5048 38.6827 17.5419 35.9058 21.6018C34.1042 24.2988 33.2101 27.4979 33.2101 31.2422C33.2101 35.2447 34.795 39.8641 37.9512 45.1147C40.2404 48.9163 43.1257 52.6176 46.5934 56.2327L46.5663 56.204Z"
                fill="#444545"
              />
            </svg>
          </div>
          <p className="uppercase md:text-[1.8rem] relative md:absolute md:pl-[4.17rem] md:pb-[4.58rem] bottom-0 lg:text-[1.25rem] text-[3.36rem] font-bold text-[#444] max-md:mt-[2.46rem] max-md:mb-[5.9rem] max-md:text-center">
            {dataBanner?.slogan}
          </p>
          <div className="border-b border-solid border-[#888] w-[90%] md:hidden "></div>
          <div className="md:ml-auto md:w-[65.4375rem] md:pr-[14.44rem] max-md:px-[4.27rem] md:hidden mt-[6.93rem]">
            <h3
              dangerouslySetInnerHTML={{ __html: `${dataDesign?.heading}` }}
              className="md:text-[3.4375rem] md:w-[44rem] text-[6.93333rem] text-[#444] leading-[1.2] md:tracking-[-0.12375rem] tracking-[-0.208rem] title"
            ></h3>
            <div className="md:grid grid-cols-2 list-content gap-x-[3.19rem] gap-y-[1.87rem] mt-[1.25rem] flex flex-col">
              {dataDesign?.aboutCompany?.map((item, index) => (
                <div
                  key={index}
                  className={`text-[1.35417rem] md:pt-[2.19rem] pt-[4.8rem] border-t border-solid max-md:pb-[4rem] border-[#888] ${
                    index === 0 ? "max-md:border-none" : ""
                  }`}
                >
                  <Link href={`/${lang}/${lang === 'vi' ? 've-chung-toi' : 'about-us'}/${
                     lang === 'vi' ? ( index === 0
                    ? "tam-nhin"
                    : index === 1
                    ? "so-do-to-chuc"
                    : index === 2
                    ? "chang-duong-phat-trien"
                    : "chung-nhan"
                    )
                    :(
                      index === 0
                      ? "vision"
                      : index === 1
                      ? "company-structure"
                      : index === 2
                      ? "history"
                      : "awards"
                    )
                  }`}>
                  <h4 className='font-bold text-[#444] md:text-[1.5rem] lg:text-[1.35417rem] text-[4.26667rem] mb-[1.35417rem]'>{item?.title}</h4>
                </Link>
                  <p className="text-[#888] md:text-[1.5rem] md:mt-[1rem] md:tracking-[-0.04063rem] tracking-[-0.128rem] lg:text-[1.35417rem] text-[4.26667rem] text-justify">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
