import { Button, TextField } from "@mui/material";
import BasicDatePicker from "../custom-components/DatePickerInput";

const AppointmentContact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${"Images/hospitalCheckUpImage.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
      className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 min-h-screen"
    >
      <div
        style={{
          backgroundColor: "rgba(50, 86, 168, 0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      <section className="w-full sm:w-80 md:w-1/2 lg:w-96 bg-white p-6 rounded-lg shadow-md relative z-10 order-2 md:order-1">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          Book an appointment today!
        </h1>
        <p className="mb-6 text-sm sm:text-base">
          If you have any general or medical inquiry, feel free to contact us.
          Our doctors will respond asap.
        </p>
        <form className="flex flex-col gap-4">
          <TextField
            size="small"
            label="Full Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            size="small"
            label="Phone No."
            variant="outlined"
            fullWidth
          />
          <TextField size="small" label="Email" variant="outlined" fullWidth />
          <BasicDatePicker />
          <Button variant="contained" color="primary" size="small" fullWidth>
            Make Appointment
          </Button>
        </form>
      </section>

      <section className="w-full sm:w-80 md:w-1/2 lg:w-96 text-white flex flex-col gap-4 relative z-10 text-center md:text-left order-1 md:order-2">
        <h1 className="text-lg sm:text-xl md:text-4xl font-bold">
          Healing Thousands of Life.
        </h1>
        <p className="text-sm sm:text-base">
          We are one of the best hospitals in Guntur, with over 7+ years of
          experience and 25+ qualified doctors.
        </p>
        <div className="w-full h-[1px] bg-white"></div>
      </section>
    </div>
  );
};

export default AppointmentContact;
