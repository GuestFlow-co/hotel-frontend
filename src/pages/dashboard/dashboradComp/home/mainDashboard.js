import React, { useEffect, useState } from "react";
import "./MainDashboard.scss";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import { Progress } from "@chakra-ui/react";
import BookingTable from "../Table/BookingTable";
import { useSelector } from "react-redux";
function MainDashboard({ bookings, tours, rooms, users }) {
  const [revenue, setRevenue] = useState(0);
  let roomTypes = {}; // Declare roomTypes
  const labels = []; // Declare labels
  const seriesData = []; // Declare seriesData
  const handleButtonClick = (granularity) => {
    setSelectedTimeGranularity(granularity);
  };
  // const users=useSelector(state=>state.users.users)
  useEffect(() => {
    const sumOfPreviousPayments = bookings.reduce((total, booking) => {
      const payment = booking.payment;

      if (payment) {
        console.log("Payment:", payment);
        return total + payment.current_payment;
      }
      return total;
    }, 0);

    setRevenue(sumOfPreviousPayments);
    rooms.forEach((room) => {
      const roomType = room.roomType;
      if (roomType) {
        if (roomTypes[roomType]) {
          roomTypes[roomType] += 1;
        } else {
          roomTypes[roomType] = 1;
          labels.push(roomType);
        }
      }
    });

    // Prepare the series data array
    labels.forEach((label) => {
      seriesData.push(roomTypes[label]);
    });

    const options = {
      chart: {
        type: "donut",
        animations: {
          enabled: true, // Enable animations
          easing: "easeinout", // Easing function for animations
          speed: 3500, // Animation speed in milliseconds
          animateGradually: {
            enabled: true,
            delay: 550,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 550,
          },
        },
      },
      title: {
        text: "Room Types Chart",
        align: "center", // Title alignment (left, center, right)
        margin: 50, // Margin around the title
        offsetY: 10, // Vertical offset from the top
        style: {
          fontSize: "18px", // Title font size
          fontWeight: "bold", // Title font weight
          color: "#333", // Title font color
        },
      },
      legend: {
        position: "bottom", // Place labels at the bottom
        horizontalAlign: "center", // Place labels in a column to the left
        fontSize: "14px", // Label font size
        fontWeight: "normal", // Label font weight
        color: "#666", // Label font color
      },
      labels: labels,
    };

    setDonutData({
      options: options,
      series: seriesData,
    });
  }, [bookings, rooms]);
  const [selectedTimeGranularity, setSelectedTimeGranularity] =
    useState("hour");

  // Function to aggregate bookings by hour
  function aggregateBookingsByTimeGranularity(bookings, timeGranularity) {
    const aggregatedData = {};

    bookings.forEach((booking) => {
      const checkInDate = new Date(booking.check_in_date);

      let timeKey;

      if (timeGranularity === "hour") {
        timeKey = checkInDate.getHours() + ":00";
      } else if (timeGranularity === "minute") {
        console.log(checkInDate, "checkInDate.getMinutes()");
        timeKey = checkInDate.getHours() + ":" + checkInDate.getMinutes();
      } else if (timeGranularity === "day") {
        timeKey = checkInDate.toDateString();
      }

      if (aggregatedData[timeKey]) {
        aggregatedData[timeKey]++;
      } else {
        aggregatedData[timeKey] = 1;
      }
    });

    return aggregatedData;
  }

  function RevenewChart(bookings, timeGranularity) {
    const aggregatedData = {};

    bookings.forEach((booking) => {
      booking.payment.previous_payments.forEach((previousPayment) => {
        const paymentDate = new Date(previousPayment.previous_payment_date);
        let timeKey;

        if (timeGranularity === "hour") {
          timeKey = paymentDate.getHours() + ":00";
        } else if (timeGranularity === "minute") {
          timeKey = paymentDate.getHours() + ":" + paymentDate.getMinutes();
        } else if (timeGranularity === "day") {
          timeKey = paymentDate.toDateString();
        }

        if (aggregatedData[timeKey]) {
          aggregatedData[timeKey] += previousPayment.previous_payment;
        } else {
          aggregatedData[timeKey] = previousPayment.previous_payment;
        }
      });
    });

    return aggregatedData;
  }

  const aggregatedBookings = aggregateBookingsByTimeGranularity(
    bookings,
    selectedTimeGranularity
  );
  const aggreagteRevenewChart = RevenewChart(bookings, selectedTimeGranularity);
  const chartData = Object.entries(aggregatedBookings).map(([time, count]) => ({
    x: time, // Display the selected time granularity
    y: count,
  }));
  const chartData2 = Object.entries(aggreagteRevenewChart).map(
    ([time, count]) => ({
      x: time, // Display the selected time granularity
      y: count,
    })
  );

  const options = {
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 5,
    },
    title: {
      text: "bookings and Revenew Chart",
      align: "center", // Title alignment (left, center, right)
      margin: 50, // Margin around the title
      offsetY: 10, // Vertical offset from the top
      style: {
        fontSize: "18px", // Title font size
        fontWeight: "bold", // Title font weight
        color: "#333", // Title font color
      },
    },
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: chartData.map((data) => data.x),
    },
  };

  const series = [
    {
      name: "Bookings per " + selectedTimeGranularity,
      data: chartData,
    },
    {
      name: "Revenew per " + selectedTimeGranularity,
      data: chartData2,
    },
  ];

  const [donutData, setDonutData] = useState({
    options: {
      chart: {
        type: "donut",
      },
    },
    series: [],
  });

  console.log(donutData, "donutDatadonutData");
  return (
    <div className="main-dev-dashbordHome">
      <div className="header-cards-dash" style={{ width: "100%" }}>
        <div className="dash-card-home">
          <i
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: "22px",
              backgroundColor: "rgb(156,39,176)",
              boxShadow: "5px 3px 10px #150f0f4d",
              padding: "15px",
              borderRadius: "10px",
              margin: "20px",
              marginBottom: "50px",
            }}
            _ngcontent-ng-c734776574=""
            class="fas fa-paste"
          ></i>{" "}
          <div className="card-content-home">
            <div>
              <p> Total bookings</p>
              <p style={{ marginRight: "75px" }}> {bookings.length}</p>

            </div>
          </div>
          {/* <Progress colorScheme="green" size="sm" value={50} /> */}
        </div>
        <div className="dash-card-home">
          <i
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: "22px",
              backgroundColor: "rgb(255,152,0)",
              boxShadow: "5px 3px 10px #150f0f4d",
              padding: "15px",
              borderRadius: "10px",
              margin: "20px",
              marginBottom: "50px",
            }}
            _ngcontent-ng-c734776574=""
            class="fas fa-bed"
          ></i>
          <div className="card-content-home">
            <div>
              <p> Total Rooms</p>
              <p style={{ marginRight: "75px" }}> {rooms.length}</p>
            </div>
          </div>
        </div>
        <div className="dash-card-home">
          <i
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: "22px",
              backgroundColor: "rgb(76,175,80)",
              boxShadow: "5px 3px 10px #150f0f4d",
              padding: "15px",
              borderRadius: "10px",
              margin: "20px",
              marginBottom: "50px",
            }}
            _ngcontent-ng-c734776574=""
            class="fas fa-users"
          ></i>{" "}
          <div className="card-content-home">
            <div>
              <p> Total customers</p>
              <p style={{ marginRight: "75px" }}> {users ? users.length : 0}</p>
            </div>
          </div>
        </div>
        <div className="dash-card-home">
          <i
            style={{
              color: "white",
              fontWeight: "900",
              fontSize: "25px",
              backgroundColor: "rgb(0,188,212)",
              boxShadow: "5px 3px 10px #150f0f4d",
              padding: "18px",
              borderRadius: "10px",
              margin: "20px",
              marginBottom: "50px",
            }}
            _ngcontent-ng-c734776574=""
            class="fas fa-dollar-sign"
          ></i>{" "}
          <div className="card-content-home">
            <div>
              <p> Total Revenue</p>
              <p style={{ marginRight: "75px" }}> ${revenue}</p>
            </div>
          </div>
        </div>
      </div>
      <section className="charts-section">
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "55%", backgroundColor: "white" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                margin: "10px",
              }}
            >
              <button
                className="chart-btn"
                onClick={() => handleButtonClick("day")}
              >
                Day
              </button>

              <button
                className="chart-btn"
                onClick={() => handleButtonClick("hour")}
              >
                Hour
              </button>
              <button
                className="chart-btn"
                onClick={() => handleButtonClick("minute")}
              >
                Minute
              </button>
            </div>
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={370}
              width="100%"
              style={{
                // border: "1px solid #e0e0e0",
                borderRadius: "8px",
                background: "white",
                // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
          <div style={{ width: "45%", padding: "20px 0px", marginLeft: "30px" }}>
            <Chart
              options={donutData.options}
              series={donutData.series}
              type="donut"
              height={460}
              width="100%"
              style={{
                // border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "10px",
                background: "white",
                // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
      </section>
      <BookingTable bookings={bookings} users={users} />
    </div>
  );
}

export default MainDashboard;
