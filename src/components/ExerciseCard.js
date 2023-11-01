import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { motion } from "framer-motion";

const ExerciseCard = ({ exercise }) => (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <div className="group relative mx-auto w-full max-w-sm overflow-hidden  rounded-lg bg-white p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-white/50">
            <div className="relative z-10 flex flex-col items-center overflow-hidden justify-center  bg-white  transition-colors duration-500">
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                <Stack direction="row">
                    <Button sx={{ ml: '21px', color: '#fff', background: '#41ff85', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        {exercise.bodyPart}
                    </Button>
                    <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                        {exercise.target}
                    </Button>
                </Stack>
                <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                    {exercise.name}
                </Typography>
            </div>
            <motion.div
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                style={{ scale: 1.5 }}
                transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-green-400 via-green-400/0 to-green-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
        </div>
    </Link>
);

export default ExerciseCard;