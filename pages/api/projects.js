const projects = [
    {
        id: 1,
        title: 'Exodevo',
        tech: 'HTML/CSS/JS',
        content: 'This was a website I built for ExoDevo during my internship at NC-Websites.',
        website: 'https://www.exodevo.com',
        images: {
            image1: '/images/exodevo.webp',
            image2: '/images/njordic.webp',
            image3: '/images/geotechniek.webp',
        }
    },
    {
        id: 2,
        title: 'NjordIC',
        tech: 'HTML/CSS/JS',
        content: 'This was a website I built for ExoDevo during my internship at NC-Websites.',
        website: 'https://www.exodevo.com',
        images: {
            image1: '/images/njordic.webp',
            image2: '/images/exodevo.webp',
            image3: '/images/geotechniek.webp',
        }
    },
    {
        id: 3,
        title: 'Jepma Belastingsadviseurs',
        tech: 'HTML/CSS/JS',
        content: 'This was a website I built for ExoDevo during my internship at NC-Websites.',
        website: 'https://www.exodevo.com',
        images: {
            image1: '/images/jepma.webp',
            image2: '/images/njordic.webp',
            image3: '/images/geotechniek.webp',
        }
    },
    {
        id: 4,
        title: 'Geotechniek',
        tech: 'HTML/CSS/JS',
        content: 'This was a website I built for ExoDevo during my internship at NC-Websites.',
        website: 'https://www.exodevo.com',
        images: {
            image1: '/images/geotechniek.webp',
            image2: '/images/njordic.webp',
            image3: '/images/geotechniek.webp',
        }
    },
    {
        id: 5,
        title: 'Taxicentrale Oldambt',
        tech: 'HTML/CSS/JS',
        content: 'This was a website I built for ExoDevo during my internship at NC-Websites.',
        website: 'https://www.exodevo.com',
        images: {
            image1: '/images/taxi_oldambt.webp',
            image2: '/images/njordic.webp',
            image3: '/images/geotechniek.webp',
        }
    },
    {
        id: 6,
        title: 'DMG Uitvaart',
        tech: 'HTML/CSS/JS',
        content: 'This was a website I built for ExoDevo during my internship at NC-Websites.',
        website: 'https://www.exodevo.com',
        images: {
            image1: '/images/dmg.webp',
            image2: '/images/njordic.webp',
            image3: '/images/geotechniek.webp',
        }
    }
]

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(projects)
}
