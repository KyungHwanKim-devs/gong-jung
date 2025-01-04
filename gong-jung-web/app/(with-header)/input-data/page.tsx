"use client";

import { useState } from "react";

export default function InputData() {
  const [images, setImages] = useState<File[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [formData, setFormData] = useState<Record<string, string>>({
    orgCode: "",
    unitCode: "",
    docYear: "",
    volNo: "",
    detOrgCode: "",
    detYear: "",
    labelNo: "",
    oldOrgName: "",
    docDesc: "",
    detDesc: "",
    docNo: "",
    detNo: "",
    detailStatus: "",
    sendDate: "",
    oldOrgDocNo: "",
    oldDocTerm: "",
    docName: "",
    userName: "",
    detDecision: "",
    startPage: "",
    endPage: "",
    detPage: "",
    detSpecFlag1: "",
    detSpecFlag2: "",
    detSpecFlag3: "",
    detSpecFlag4: "",
    detSpecFlag5: "",
    openFlag: "",
    openGradeFlag1: "",
    openGradeFlag2: "",
    openGradeFlag3: "",
    openGradeFlag4: "",
    openGradeFlag5: "",
    openGradeFlag6: "",
    openGradeFlag7: "",
    openGradeFlag8: "",
    openGrade: "",
    imagePath: "",
    inputTime: "",
    updateTime: "",
  });

  const inputFields = [
    { label: "처리과코드", name: "orgCode" },
    { label: "구기록물등록번호", name: "unitCode" },
    { label: "철생산년도", name: "docYear" },
    { label: "권수", name: "volNo" },
    { label: "건코드", name: "detOrgCode" },
    { label: "건생산년도", name: "detYear" },
    { label: "임시레이블번호", name: "labelNo" },
    { label: "처리과", name: "oldOrgName" },
    { label: "철명", name: "docDesc" },
    { label: "건명", name: "detDesc" },
    { label: "철번호", name: "docNo" },
    { label: "건번호", name: "detNo" },
    { label: "접수1, 생산2", name: "detailStatus" },
    { label: "생산일자", name: "sendDate" },
    { label: "접수번호", name: "oldOrgDocNo" },
    { label: "보존연한", name: "oldDocTerm" },
    { label: "보낸사람", name: "docName" },
    { label: "기안자", name: "userName" },
    { label: "결재자", name: "detDecision" },
    { label: "시작페이지", name: "startPage" },
    { label: "끝페이지", name: "endPage" },
    { label: "면수", name: "detPage" },
    { label: "공개여부", name: "openFlag" },
    { label: "1호", name: "openGradeFlag1" },
    { label: "2호", name: "openGradeFlag2" },
    { label: "3호", name: "openGradeFlag3" },
    { label: "4호", name: "openGradeFlag4" },
    { label: "5호", name: "openGradeFlag5" },
    { label: "6호", name: "openGradeFlag6" },
    { label: "7호", name: "openGradeFlag7" },
    { label: "8호", name: "openGradeFlag8" },
    { label: "공개등급", name: "openGrade" },
    { label: "이미지 경로", name: "imagePath" },
    { label: "입력시간", name: "inputTime" },
    { label: "수정시간", name: "updateTime" },
  ];

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const fileArray = Array.from(event.target.files);
    setImages(fileArray);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handlePrevious = () => {
    if (images.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("이미지를 업로드하세요.");
      return;
    }

    const formDataToSend = new FormData();
    const image = images[currentIndex];
    formDataToSend.append('file', image, `image_${currentIndex}.png`);

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("/api/image", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("입력되었습니다.");
        setImages((prevImages) => prevImages.filter((_, index) => index !== currentIndex));
        setCurrentIndex(0);
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        alert("저장 실패!");
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert("오류 발생!");
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-[40%]">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">이미지</h1>

            {images.length > 0 ? (
              <div className="flex flex-col items-center">
                <img
                  src={URL.createObjectURL(images[currentIndex])}
                  alt={`미리보기 이미지 ${currentIndex + 1}`}
                  className="max-w-full max-h-64 border"
                />
                <div className="flex mt-4 space-x-2">
                  <button
                    onClick={handlePrevious}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    좌
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    우
                  </button>
                  <p className="mt-2 text-sm text-gray-600">
                    현재 이미지: {currentIndex + 1} / 전체 이미지:{" "}
                    {images.length}
                  </p>
                </div>
              </div>
            ) : (
              <p>이미지를 업로드해주세요.</p>
            )}
            {images.length < 1 && (
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
              />
            )}
          </div>
        </div>
        <form>
        <div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              type="submit"
              onClick={handleSubmit}
            >
              입력하기
            </button>
          </div>
          {inputFields.map((field) => (
          <div key={field.name} className="mb-1 flex items-center w-full">
            <label className="block mb-1 w-[250px]">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={(e) => handleInputChange(e, field.name)}
              className="border p-1 w-[400px]"
            />
          </div>
        ))}
        {/* <div className="mb-4 flex">
          <label className="block mb-2">처리과코드</label>
          <input
            type="text"
            name="orgCode"
            value={formData.orgCode}
            onChange={(e) => handleInputChange(e, 'orgCode')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">구기록물등록번호</label>
          <input
            type="text"
            name="unitCode"
            value={formData.unitCode}
            onChange={(e) => handleInputChange(e, 'unitCode')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">철생산년도</label>
          <input
            type="text"
            name="docYear"
            value={formData.docYear}
            onChange={(e) => handleInputChange(e, 'docYear')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">권수</label>
          <input
            type="text"
            name="volNo"
            value={formData.volNo}
            onChange={(e) => handleInputChange(e, 'volNo')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">건코드</label>
          <input
            type="text"
            name="detOrgCode"
            value={formData.detOrgCode}
            onChange={(e) => handleInputChange(e, 'detOrgCode')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">건생산년도</label>
          <input
            type="text"
            name="detYear"
            value={formData.detYear}
            onChange={(e) => handleInputChange(e, 'detYear')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">임시레이블번호</label>
          <input
            type="text"
            name="labelNo"
            value={formData.labelNo}
            onChange={(e) => handleInputChange(e, 'labelNo')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">처리과</label>
          <input
            type="text"
            name="oldOrgName"
            value={formData.oldOrgName}
            onChange={(e) => handleInputChange(e, 'oldOrgName')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">철명</label>
          <input
            type="text"
            name="docDesc"
            value={formData.docDesc}
            onChange={(e) => handleInputChange(e, 'docDesc')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">건명</label>
          <input
            type="text"
            name="detDesc"
            value={formData.detDesc}
            onChange={(e) => handleInputChange(e, 'detDesc')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">철번호</label>
          <input
            type="text"
            name="docNo"
            value={formData.docNo}
            onChange={(e) => handleInputChange(e, 'docNo')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">건번호</label>
          <input
            type="text"
            name="detNo"
            value={formData.detNo}
            onChange={(e) => handleInputChange(e, 'detNo')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">접수1, 생산2</label>
          <input
            type="text"
            name="detailStatus"
            value={formData.detailStatus}
            onChange={(e) => handleInputChange(e, 'detailStatus')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">생산일자</label>
          <input
            type="text"
            name="sendDate"
            value={formData.sendDate}
            onChange={(e) => handleInputChange(e, 'sendDate')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">접수번호</label>
          <input
            type="text"
            name="oldOrgDocNo"
            value={formData.oldOrgDocNo}
            onChange={(e) => handleInputChange(e, 'oldOrgDocNo')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">보존연한</label>
          <input
            type="text"
            name="oldDocTerm"
            value={formData.oldDocTerm}
            onChange={(e) => handleInputChange(e, 'oldDocTerm')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">보낸사람</label>
          <input
            type="text"
            name="docName"
            value={formData.docName}
            onChange={(e) => handleInputChange(e, 'docName')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">기안자</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={(e) => handleInputChange(e, 'userName')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">결재자</label>
          <input
            type="text"
            name="detDecision"
            value={formData.detDecision}
            onChange={(e) => handleInputChange(e, 'detDecision')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">시작페이지</label>
          <input
            type="text"
            name="startPage"
            value={formData.startPage}
            onChange={(e) => handleInputChange(e, 'startPage')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">끝페이지</label>
          <input
            type="text"
            name="endPage"
            value={formData.endPage}
            onChange={(e) => handleInputChange(e, 'endPage')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">면수</label>
          <input
            type="text"
            name="detPage"
            value={formData.detPage}
            onChange={(e) => handleInputChange(e, 'detPage')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">공개여부</label>
          <input
            type="text"
            name="openFlag"
            value={formData.openFlag}
            onChange={(e) => handleInputChange(e, 'openFlag')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">1호</label>
          <input
            type="text"
            name="openGradeFlag1"
            value={formData.openGradeFlag1}
            onChange={(e) => handleInputChange(e, 'openGradeFlag1')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">2호</label>
          <input
            type="text"
            name="openGradeFlag2"
            value={formData.openGradeFlag2}
            onChange={(e) => handleInputChange(e, 'openGradeFlag2')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">3호</label>
          <input
            type="text"
            name="openGradeFlag3"
            value={formData.openGradeFlag3}
            onChange={(e) => handleInputChange(e, 'openGradeFlag3')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">4호</label>
          <input
            type="text"
            name="openGradeFlag4"
            value={formData.openGradeFlag4}
            onChange={(e) => handleInputChange(e, 'openGradeFlag4')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">5호</label>
          <input
            type="text"
            name="openGradeFlag5"
            value={formData.openGradeFlag5}
            onChange={(e) => handleInputChange(e, 'openGradeFlag5')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">6호</label>
          <input
            type="text"
            name="openGradeFlag6"
            value={formData.openGradeFlag6}
            onChange={(e) => handleInputChange(e, 'openGradeFlag6')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">7호</label>
          <input
            type="text"
            name="openGradeFlag7"
            value={formData.openGradeFlag7}
            onChange={(e) => handleInputChange(e, 'openGradeFlag7')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">8호</label>
          <input
            type="text"
            name="openGradeFlag8"
            value={formData.openGradeFlag8}
            onChange={(e) => handleInputChange(e, 'openGradeFlag8')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">공개등급</label>
          <input
            type="text"
            name="openGrade"
            value={formData.openGrade}
            onChange={(e) => handleInputChange(e, 'openGrade')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">이미지 경로</label>
          <input
            type="text"
            name="imagePath"
            value={formData.imagePath}
            onChange={(e) => handleInputChange(e, 'imagePath')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">입력시간</label>
          <input
            type="text"
            name="inputTime"
            value={formData.inputTime}
            onChange={(e) => handleInputChange(e, 'inputTime')}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block mb-2">수정시간</label>
          <input
            type="text"
            name="updateTime"
            value={formData.updateTime}
            onChange={(e) => handleInputChange(e, 'updateTime')}
            className="border p-2 w-full"
          />
        </div> */}
          
        </form>
      </div>
    </div>
  );
}
