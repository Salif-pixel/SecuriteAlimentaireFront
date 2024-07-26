"use client";
import React from "react";
import { Label } from "../../../../component/ui/label.tsx";
import { Input } from "../../../../component/ui/input.tsx";
import { cn } from "../../../../utils/cn.ts";
import {

    IconBrandGoogle,
} from "@tabler/icons-react";
import {

    Button,
    Text,
    Anchor,
} from '@mantine/core';
import {useNavigate} from "react-router-dom";
import { motion } from "framer-motion";

export function SignInForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    const navigate = useNavigate();
    return (
        <motion.div initial={{y: 200, scale: 0.95, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 0.5
        }} className="w-full md:w-1/2 h-[calc(100vh)] overflow-auto">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white ">
            <h2 className="font-gotham font-bold  text-xl md:text-4xl text-blueSmart ">
               Bon retour sur Eath
            </h2>
            <p className="text-neutral-600 font-gotham font-bold text-sm max-w-sm mt-2 ">
                Connectez-vous pour continuer
            </p>

            <form className="my-8" onSubmit={handleSubmit}>

                <LabelInputContainer className="mb-4 font-gotham font-bold">
                    <Label htmlFor="email" className={`font-gotham font-bold`}>Addresse mail</Label>
                    <Input id="email" placeholder="utilisateur@gmail.com" className={`font-gotham font-bold`} type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password" className={`font-gotham font-bold`}>Mot de passe</Label>
                    <Input id="password" placeholder="••••••••"  className={`font-gotham font-bold`} type="password" />
                </LabelInputContainer>


                <Button className={`bg-blueSmart`} fullWidth mt="xl" size="md">
                    Se connecter
                </Button>
                <Text ta="center" mt="md">
                   Vous n'avez pas encore de compte?{' '}
                    <Anchor<'a'> href="#" fw={700} onClick={(event) => {event.preventDefault(); navigate("/auth/register")}}>
                        S'inscire
                    </Anchor>
                </Text>
                <div className={`flex flex-col justify-start items-start w-full `}>
                    <Anchor component="button" type="button" c="dimmed"  size="xs">
                        Mot de passe oublié?
                    </Anchor>
                    <Anchor component="button" onClick={()=>{ navigate("/accueil")}} type="button" c="dimmed"  size="xs">
                        Retour à l'accueil
                    </Anchor>
                </div>

                <div className="bg-gradient-to-r from-transparent via-neutral-300  to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">

                    <button
                        className=" relative group/btn font-gotham font-bold border border-200 flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 shadow-input bg-gray-50 "
                        type="submit"
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 " />
                        <span className="text-neutral-700  text-sm ">
              Google
            </span>
                        <BottomGradient />
                    </button>

                </div>
            </form>
        </div>
        </motion.div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
