import React from 'react';
import { FutureHouseApp, Typography } from '../index';
import { VStack } from '@chakra-ui/react';
import { typographyStyles } from '../../theme';
import { WordTypeWriterComponent } from '../../hooks';


export default {
    title: 'Future House/Typography',
    component: Typography
};

const VariantExampleTemplate = () => {
    return (
        <FutureHouseApp>
            <VStack spacing={4} align="start">
                {Object.keys(typographyStyles).map((variant, index) => (
                    <Typography key={`${variant}-${index}`} variant={variant}>
                        {variant}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                ))}
            </VStack>
        </FutureHouseApp>
    );
};

export const TypographyVariants = VariantExampleTemplate.bind({});

const TypeWriterTemplate = (args) => {
    const text = "The journey of cell therapy from a conceptual framework to a cornerstone of regenerative medicine is a fascinating tale of scientific perseverance and innovation. This section will explore the historical milestones and key developments that have shaped the field of cell therapy, highlighting the contributions of pioneering researchers and landmark studies that have paved the way for today's advancements. The development of cell therapy has been marked by several key historical milestones. The discovery of the Human Leukocyte Antigen (HLA) in the 1960s was a significant breakthrough, followed by the development of reduced-intensity conditioning regimens in the 1990s and personalized conditioning regimens in the 2000s (Chabannon2018HematopoieticSC pages 3-3). The first allogeneic Hematopoietic Stem Cell Transplantation (HSCT) was performed in 2004, and the infusion of Mesenchymal Stem Cells (MSCs) was achieved in 2010 (Chabannon2018HematopoieticSC pages 3-3). Regulatory approvals also marked significant advancements in the field. The US FDA approved Carticel in 1997, the first MSC product in South Korea in 2011, and Hemacord in 2011. South Korea approved stem cell preparations like Cartistem and Cupistem in 2012. Prochymal was conditionally approved in 2012 in Canada and New Zealand to treat pediatric Graft versus Host Disease (GvHD) (Vertès2016HistoryOM pages 4-5). The field has expanded to treat various diseases beyond cancer, including autoimmune diseases, infections, inflammation, degenerative diseases, and fibrosis. The optimization of genetically engineered immune cells is being pursued to reduce harmful cytokine release and prolong cell survival (He2019CellTP pages 4-4). The FDA approval of Kymriah, a cell-based gene therapy developed by Novartis Pharmaceuticals Corporation, for certain pediatric and young adult patients with refractory or relapse acute lymphoblastic leukemia in 2017, was another significant milestone (He2019CellTP pages 1-1)."
    return (
        <FutureHouseApp>
            <Typography typeWriter {...args}>
                {text}
            </Typography>
        </FutureHouseApp>
    )
}

export const TypographyTypeWriter = TypeWriterTemplate.bind({});

const WordTypeWriterTemplate = () => {
    const text = "The journey of cell therapy from a conceptual framework to a cornerstone of regenerative medicine is a fascinating tale of scientific perseverance and innovation. This section will explore the historical milestones and key developments that have shaped the field of cell therapy, highlighting the contributions of pioneering researchers and landmark studies that have paved the way for today's advancements. The development of cell therapy has been marked by several key historical milestones. The discovery of the Human Leukocyte Antigen (HLA) in the 1960s was a significant breakthrough, followed by the development of reduced-intensity conditioning regimens in the 1990s and personalized conditioning regimens in the 2000s (Chabannon2018HematopoieticSC pages 3-3). The first allogeneic Hematopoietic Stem Cell Transplantation (HSCT) was performed in 2004, and the infusion of Mesenchymal Stem Cells (MSCs) was achieved in 2010 (Chabannon2018HematopoieticSC pages 3-3). Regulatory approvals also marked significant advancements in the field. The US FDA approved Carticel in 1997, the first MSC product in South Korea in 2011, and Hemacord in 2011. South Korea approved stem cell preparations like Cartistem and Cupistem in 2012. Prochymal was conditionally approved in 2012 in Canada and New Zealand to treat pediatric Graft versus Host Disease (GvHD) (Vertès2016HistoryOM pages 4-5). The field has expanded to treat various diseases beyond cancer, including autoimmune diseases, infections, inflammation, degenerative diseases, and fibrosis. The optimization of genetically engineered immune cells is being pursued to reduce harmful cytokine release and prolong cell survival (He2019CellTP pages 4-4). The FDA approval of Kymriah, a cell-based gene therapy developed by Novartis Pharmaceuticals Corporation, for certain pediatric and young adult patients with refractory or relapse acute lymphoblastic leukemia in 2017, was another significant milestone (He2019CellTP pages 1-1)."
    return (
        <FutureHouseApp>
            <Typography>
                <WordTypeWriterComponent desiredText={text} setIsDone={() => {}} percentageCompleteCallBack={percent => console.log('percent:', percent)}/>
            </Typography>
        </FutureHouseApp>
    )
}

export const FullWordTypeWriterExample = WordTypeWriterTemplate.bind({});