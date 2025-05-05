import { useState } from "react";
import "./GallerySec.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import GalleryCon from "../GalleryCon/GalleryCon";

export default function GallerySec() {
  const taps = [
    "All",
    "Classrooms",
    "Library",
    "Science Lab",
    "Computer Lab",
    "Garden and Nature Area",
  ];

  const [selectedTap, setSelectedTap] = useState("All");

  const classroomImages = [
    "/Images/Feature1.png",
    "/Images/Feature2.png",
    "/Images/Feature3.png",
    "/Images/Feature4.png",
  ];

  const LibraryImages = [
    "/Images/Library1.png",
    "/Images/Library2.png",
    "/Images/Library3.png",
    "/Images/Library4.png",
  ];

  const SLapImages = [
    "/Images/SLap.png",
    "/Images/SLap2.png",
    "/Images/SLap3.png",
    "/Images/SLap4.png",
  ];

  const CLapImages = [
    "/Images/CLap.png",
    "/Images/CLap2.png",
    "/Images/CLap3.png",
    "/Images/CLap4.png",
  ];

  const GardenImages = [
    "/Images/Garden.png",
    "/Images/Garden2.png",
    "/Images/Garden3.png",
    "/Images/Garden4.png",
  ];

  const allSections = [
    {
      title: "Classrooms",
      content:
        "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
      data: classroomImages,
    },
    {
      title: "Library",
      content:
        "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
      data: LibraryImages,
    },
    {
      title: "Science Lab",
      content:
        "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
      data: SLapImages,
    },
    {
      title: "Computer Lab",
      content:
        "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
      data: CLapImages,
    },
    {
      title: "Garden and Nature Area",
      content:
        "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
      data: GardenImages,
    },
  ];

  const filteredSections =
    selectedTap === "All"
      ? allSections
      : allSections.filter((section) => section.title === selectedTap);

  return (
    <div className="GallerySec Flex MainContainer">
      <SectionsHeader
        title="Our Gallery"
        header="Our Rooms Gallery"
        text="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        margin={true}
        location="center"
        fontSize="big"
      />

      <div className="GalleryTapsWrapper FlexRow">
        {taps.map((tap, index) => (
          <button
            key={index}
            className={`Taps SharedBorder ${
              selectedTap === tap ? "ActiveTap" : ""
            }`}
            onClick={() => setSelectedTap(tap)}
          >
            {tap}
          </button>
        ))}
      </div>

      {filteredSections.map((section, index) => (
        <GalleryCon
          key={index}
          data={section.data}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}
