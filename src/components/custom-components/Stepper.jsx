import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";

const steps = [
  {
    label: "Patient Testimonials",
    description: `Wonderful experience with Andhra Prime hospital. Dr. Karthik is incredible. I've never had to wait more than a few minutes when I arrive on time for an appointment. He's very understanding and listens to concerns.`,
    username: "vasu srini",
  },
  {
    label: "Patient Testimonials",
    description: `Dr.anvesh sir u r the most heart touching doctor in prime hospital. The way u treat patients is like parenting care. All the best to you!`,
    username: "alwin shekar",
  },
  {
    label: "Patient Testimonials",
    description: `Dr. Anvesh is very patient and dedicated to his patients. The hospital is clean, and the amenities are great.`,
    username: "sruthi khunche Johnson",
  },
  {
    label: "Patient Testimonials",
    description: `Dr. Anvesh sir is well experienced and the treatment is excellent.`,
    username: "naveen babu",
  },
];

export default function PatientsFeedBack() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{ maxWidth: 900, flexGrow: 1 }}
      className="flex flex-col items-center p-4 sm:p-6 md:p-8"
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          bgcolor: "background.default",
          width: "100%",
        }}
      >
        <Typography className="text-center text-green-600 underline">
          <span className="text-lg sm:text-2xl font-semibold">
            {steps[activeStep].label}
          </span>
        </Typography>
      </Paper>

      <Box
        sx={{ height: "auto", maxWidth: 900, width: "100%", p: 2 }}
        className="flex flex-col gap-4 items-center justify-center"
      >
        <Typography className="text-center text-gray-700 mb-4 px-2">
          {steps[activeStep].description}
        </Typography>
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 sm:p-3 rounded-full">
            <LuUsers2 className="text-lg text-gray-900" />
          </div>
          <Typography className="text-md font-medium text-gray-800">
            <b>{steps[activeStep].username}</b>
          </Typography>
        </div>
      </Box>

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className="w-full flex justify-between"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            color="success"
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <MdOutlineKeyboardArrowLeft className="text-green-600" />
            ) : (
              <MdOutlineKeyboardArrowRight className="text-green-600" />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            color="success"
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <MdOutlineKeyboardArrowRight className="text-green-600" />
            ) : (
              <MdOutlineKeyboardArrowLeft className="text-green-600" />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
