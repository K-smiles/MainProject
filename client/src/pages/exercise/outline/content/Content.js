// @mui material components
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import BackgroundBlogCard_new from "examples/Cards/BlogCards/BackgroundBlogCard_new";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard_new";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard_new";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard_new";
import NavigationButton from 'components/NavigationButton';
//icon
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
//image
import picture1 from "assets/images/vascular_health.jpg";
import picture2 from "assets/images/Restoring_nerve.jpg";
import picture3 from "assets/images/Promote_joint_health.jpg";
import picture4 from "assets/images/Optimal_Exercise_Regimen.jpg";
import picture5 from "assets/images/Motivation.jpg";

function Content() {
    return (
        <MKBox bgColor="white" borderRadius="xl" shadow="lg"
            display="flex" flexDirection="column" justifyContent="center"
            mx={2} mt={-5} padding="0 10%">
            <MKBox bgColor="white" borderRadius="xl" display="flex"
                flexDirection="column" justifyContent="center"
                mt={{ xs: 1, sm: 2, md: 3 }}
                mb={{ xs: 1, sm: 2, md: 3 }}>
                <MKTypography variant="h2" mb={1} id="Benefits">
                    Benefits of Physical Activity for Type 2 Diabetes
                </MKTypography>

                <MKTypography variant="subtitle1" mb={1}>
                    Multiple studies have shown that physical activity is a very effective way to fight type 2 diabetes, and that it brings multiple benefits to our bodies, which include:
                </MKTypography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <TransparentBlogCard
                            image={picture1}
                            title="1. Improved vascular health:"
                            description="When you exercise, your muscles release many compounds that benefit vascular and circulatory health and improve blood flow."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TransparentBlogCard
                            image={picture2}
                            title="2. Restoring nerve function:"
                            description="Exercise can help prevent neuropathy caused by type 2 diabetes."
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BackgroundBlogCard
                            image={picture3}
                            title="3. Promote joint health: "
                            description="Strength and flexibility exercises through a full range of motion can 
                                effectively combat diabetes-related joint pain and frozen shoulder."
                        />
                    </Grid>
                </Grid>

                <DefaultCounterCard
                    title="Optimal Exercise Regimen"
                    description="Your optimal exercise intensity and exercise time:" />
                <BackgroundBlogCard_new
                    image={picture4}
                    title="Flexible work hours"
                    description="30-1 hour is the best time for you to work out, which allows you to lose weight without overworking yourself, and you can break it up into multiple sessions (10-15 mins)"
                    action={{
                        type: "internal", // or "external" if linking to an external URL
                        route: "/exercise/calorie", // assuming it's an internal link
                        label: "Design your exercise program" // optional, defaults to "Learn More" if not provided
                    }}
                />
                <DefaultCounterCard
                    title="Tips for Sustaining Exercise"
                    description="You may get tired in the early stages, so we've provided a few tips for sticking to your exercise "
                />
                <Grid container spacing={2} id="Tips" mt={2}> {/* Container with some spacing */}
                    <Grid item xs={12} md={8}> {/* Left side with four info cards */}
                        <Grid container spacing={2}>
                            {/* Two cards in the first row */}
                            <Grid item xs={6} md={6} style={{ marginBottom: '8%' }}>
                                <DefaultInfoCard
                                    icon={<Diversity3Icon />}
                                    title="With a friend"
                                    description="Provide social support and encouragement to make exercise more enjoyable"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} style={{ marginBottom: '8%' }}>
                                <DefaultInfoCard
                                    icon={<LocalLibraryIcon />}
                                    title="Plan ahead"
                                    description="Helps to maintain organisation and consistency, reducing the likelihood of temporary abandonment"
                                />
                            </Grid>
                            {/* Two cards in the second row */}
                            <Grid item xs={6} md={6} style={{ marginBottom: '6%' }}>
                                <DefaultInfoCard
                                    icon={<HistoryEduIcon />}
                                    title="Keep a journal"
                                    description="Recording workout progress and achievements can help to see your progress"
                                />
                            </Grid>
                            <Grid item xs={6} md={6} style={{ marginBottom: '6%' }}>
                                <DefaultInfoCard
                                    icon={<EmojiEventsIcon />}
                                    title="Reward yourself"
                                    description="It can make sticking to your workouts for the long haul more appealing"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}> {/* Right side with one larger rotating card */}
                        <CenteredBlogCard
                            image={picture5}
                            title="Motivation"
                            description="Identifying personal motivations for exercise (e.g. health, shape or mood management) can provide ongoing intrinsic motivation"
                        />
                    </Grid>
                </Grid>
            </MKBox>
            <DefaultCounterCard
                title="Australian Preferences in Sports: Word Cloud Ranking by Gender" />
            <Grid container spacing={2} id="Ranking">

                <Grid item xs={12} md={6}>
                    <DefaultCounterCard
                        description="The most popular sport for Australian male" />
                    <iframe
                        src="/1.html"
                        style={{
                            width: '100%',
                            height: '80vh',
                            border: 'none',
                            resize: 'both',
                            overflow: 'hidden'
                        }}
                        title="Exercise Word Cloud"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <DefaultCounterCard
                        description="The most popular sport for Australian female"
                    />
                    <iframe
                        src="/2.html"
                        style={{
                            width: '100%',
                            height: '80vh',
                            border: 'none',
                            resize: 'both',
                            overflow: 'hidden'
                        }}
                        title="Additional Word Cloud"
                    />
                </Grid>
            </Grid>
            <NavigationButton right="/exercise/calorie" />
        </MKBox>
    );
}

export default Content;