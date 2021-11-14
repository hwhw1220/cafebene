import React, {useState} from 'react';
import Header from '../components/Header';
import Homesection from '../components/Homesection';
import Footer from '../components/Footer';

const Home = () => {

    const [activeTab, setActiveTab] = useState(0)
    const onSelect = (id) => {
        setActiveTab(id)
    }

    return (
        <div>
            <Header onSelect={onSelect} />
            <Homesection />
            <Footer />
        </div>
    );
};

export default Home;