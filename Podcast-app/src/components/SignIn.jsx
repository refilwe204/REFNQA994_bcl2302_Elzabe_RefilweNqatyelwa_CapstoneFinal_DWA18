import PropTypes from 'prop-types';
import supabase from "./../config/SupabaseClient"; 
import { ThemeSupa } from '@supabase/ui'; 
import { Auth } from '@supabase/auth-ui-react';
import { useEffect, useState } from "react";  

export default function Signin({ onLogin }) {      
    
    const [session, setSession] = useState(null);
    
    useEffect(() => {          
        const { data: subscriptionData } = supabase.auth.onAuthStateChange((_event, session) => {              
            setSession(session);         
            if (session) {                  
                onLogin();
            }         
        });
        
        return () => {
            subscriptionData.unsubscribe();
        };
    }, [onLogin]);
    
    if (!session) {         
        return (
            <Auth 
                supabaseClient={supabase} 
                providers={['discord']} 
                styles={{ theme: ThemeSupa }} 
            />
        );
    }
}

Signin.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
