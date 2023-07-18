import moment from "moment/moment";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

const Graph = () => {
  const hospitalData = useSelector((state) => state.drReducer.hospitalData);
  const startOfWeek = moment().startOf("week");
  const endOfWeek = moment().endOf("week");
  let datesOfWeek = [];
  let diabetologyWeek = [];
  let orthopaedicsWeek = [];
  let cardiologyWeek = [];

  const getDataOfWeek = () => {
    let currentDate = new Date(startOfWeek);
    while (currentDate <= endOfWeek) {
      datesOfWeek.push(new Date(currentDate));
      let diabetology = 0;
      let orthopaedics = 0;
      let cardiology = 0;
      hospitalData.forEach((ele) => {
        if (new Date(ele.start).toDateString() === currentDate.toDateString()) {
          if (ele.department.toUpperCase() === "DIABETOLOGY") {
            diabetology++;
          } else if (ele.department.toUpperCase()  === "ORTHOPEDICS") {
            orthopaedics++;
          } else if (ele.department.toUpperCase()  === "CARDIOLOGY") {
            cardiology++;
          } 
        }
      });
      diabetologyWeek.push(diabetology);
      orthopaedicsWeek.push(orthopaedics);
      cardiologyWeek.push(cardiology);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  };
  getDataOfWeek();
  // console.log('diabetologyWeek',diabetologyWeek,'orthopaedicsWeek',orthopaedicsWeek,'cardiologyWeek',cardiologyWeek)
  const labels = datesOfWeek.map((ele) => ele.toDateString().slice(4, 10));

  let data = {
    options: {
      chart: {
        zoom: {
          enabled: false,
          type: "x",
          autoScaleYaxis: false,
          zoomedArea: {
            fill: {
              color: "#90CAF9",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
              opacity: 0.4,
              width: 1,
            },
          },
        },
      },
      xaxis: {
        categories: labels,
        title: {
          text: "Date"
        }
      },
      yaxis: {
        lines: {
          show: false,
        },
        title: {
          text: "Patients"
        },
        min: 0,
        max: 4
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 2,
      },
      legend: {
        position: "top",
      },
    },
    series: [
      {
        name: "Diabetology",
        data: diabetologyWeek,
      },
      {
        name: "Orthopaedics",
        data: orthopaedicsWeek,
      },
      {
        name: "Cardiology",
        data: cardiologyWeek,
      },
    ],
  };

  return (
    <Chart
      options={data.options}
      series={data.series}
      type="line"
      height="400vh"
      width="100%"
    />
  );
};

export default Graph;
