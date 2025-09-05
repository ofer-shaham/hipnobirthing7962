import React from 'react';
import { Container, Typography, Box, Grid, Paper, IconButton, Card, CardContent, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Stepper, Step, StepLabel, StepContent, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Award, GraduationCap, FileText, ChevronLeft, ChevronRight, Expand as ExpandMore, ExternalLink } from 'lucide-react';
import { DocumentsDesignNavigation } from '../components/Debug/DocumentsDesignNavigation';
import { Link } from 'react-router-dom';

export const Documents = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [currentDesign, setCurrentDesign] = React.useState('default');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const certifications = t('documents.certifications.items', { returnObjects: true });
  const achievements = t('documents.achievements.items', { returnObjects: true });

  // Map certifications to course names for pricing page highlighting
  const getCourseMapping = (certTitle: string) => {
    if (certTitle.includes('היפנובירת')) return 'hypnobirthing';
    if (certTitle.includes('הנקה')) return 'breastfeeding';
    if (certTitle.includes('דנסטן') && certTitle.includes('שפת')) return 'dunstan';
    if (certTitle.includes('שינה')) return 'sleep';
    if (certTitle.includes('עיסוי')) return 'massage';
    return '';
  };

  const allDocuments = [
    ...certifications.map((cert: any, index: number) => ({
      ...cert,
      type: 'certification',
      courseMapping: getCourseMapping(cert.title),
      icon: index === 0 ? <GraduationCap size={40} color="#D4A5A5" /> :
            index === 1 ? <Award size={40} color="#D4A5A5" /> :
                         <FileText size={40} color="#D4A5A5" />
    })),
    ...achievements.map((achievement: any) => ({
      ...achievement,
      type: 'achievement',
      courseMapping: '',
      icon: <Award size={40} color="#E6B89C" />
    }))
  ];

  const nextDocument = () => {
    setCurrentIndex((prev) => (prev + 1) % allDocuments.length);
  };

  const prevDocument = () => {
    setCurrentIndex((prev) => (prev - 1 + allDocuments.length) % allDocuments.length);
  };

  const renderCarouselView = () => {
    const currentDoc = allDocuments[currentIndex];
    
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 6,
            maxWidth: 600,
            width: '100%',
            textAlign: 'center',
            borderRadius: '20px',
            position: 'relative'
          }}
        >
          <Box sx={{ mb: 3 }}>
            {currentDoc.icon}
          </Box>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
            {currentDoc.title}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            {currentDoc.organization || currentDoc.description}
          </Typography>
          <Typography variant="body2">
            {currentDoc.year}
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <IconButton onClick={prevDocument} sx={{ color: 'primary.main' }}>
              <ChevronLeft size={24} />
            </IconButton>
            <Typography variant="body2" color="text.secondary">
              {currentIndex + 1} / {allDocuments.length}
            </Typography>
            <IconButton onClick={nextDocument} sx={{ color: 'primary.main' }}>
              <ChevronRight size={24} />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    );
  };

  const renderListView = () => (
    <List sx={{ mt: 4 }}>
      {allDocuments.map((doc, index) => (
        <ListItem key={index} sx={{ mb: 2 }}>
          <Paper elevation={2} sx={{ p: 3, width: '100%', display: 'flex', alignItems: 'center', gap: 3 }}>
            {doc.icon}
            <ListItemText
              primary={doc.title}
              secondary={`${doc.organization || doc.description} • ${doc.year}`}
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
            {doc.courseMapping && (
              <Button
                component={Link}
                to={`/pricing#${doc.courseMapping}`}
                variant="outlined"
                size="small"
                startIcon={<ExternalLink size={16} />}
                sx={{ ml: 2 }}
              >
                צפה במחיר
              </Button>
            )}
          </Paper>
        </ListItem>
      ))}
    </List>
  );

  const renderCardLayout = () => (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      {allDocuments.map((doc, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card elevation={3} sx={{ height: '100%', borderRadius: '16px' }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Box sx={{ mb: 2 }}>
                {doc.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                {doc.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {doc.organization || doc.description}
              </Typography>
              <Typography variant="caption">
                {doc.year}
              </Typography>
              {doc.courseMapping && (
                <Button
                  component={Link}
                  to={`/pricing#${doc.courseMapping}`}
                  variant="outlined"
                  size="small"
                  startIcon={<ExternalLink size={16} />}
                  sx={{ mt: 2 }}
                >
                  צפה במחיר
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderTimelineView = () => (
    <Stepper orientation="vertical" sx={{ mt: 4 }}>
      {allDocuments.map((doc, index) => (
        <Step key={index} active={true}>
          <StepLabel
            icon={<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40 }}>{doc.icon}</Box>}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {doc.title}
            </Typography>
          </StepLabel>
          <StepContent>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              {doc.organization || doc.description}
            </Typography>
            <Typography variant="body2">
              {doc.year}
            </Typography>
            {doc.courseMapping && (
              <Button
                component={Link}
                to={`/pricing#${doc.courseMapping}`}
                variant="outlined"
                size="small"
                startIcon={<ExternalLink size={16} />}
                sx={{ mt: 1 }}
              >
                צפה במחיר
              </Button>
            )}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );

  const renderAccordionStyle = () => (
    <Box sx={{ mt: 4 }}>
      {allDocuments.map((doc, index) => (
        <Accordion key={index} sx={{ mb: 2, borderRadius: '12px !important' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {doc.icon}
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {doc.title}
              </Typography>
              
              {currentDoc.courseMapping && (
                <Button
                  component={Link}
                  to={`/pricing#${currentDoc.courseMapping}`}
                  variant="outlined"
                  size="small"
                  startIcon={<ExternalLink size={16} />}
                  sx={{ mt: 2 }}
                >
                  צפה במחיר
                </Button>
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              {doc.organization || doc.description}
            </Typography>
            <Typography variant="body2">
              {doc.year}
            </Typography>
            {doc.courseMapping && (
              <Button
                component={Link}
                to={`/pricing#${doc.courseMapping}`}
                variant="outlined"
                size="small"
                startIcon={<ExternalLink size={16} />}
                sx={{ mt: 1 }}
              >
                צפה במחיר
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  const renderDefaultView = () => (
    <>
      {/* Certifications */}
      <Box sx={{ mb: 8, mt: 6 }}>
        <Typography variant="h4" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
          {t('documents.certifications.title')}
        </Typography>
        <Grid container spacing={4}>
          {certifications.map((cert: any, index: number) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {index === 0 ? <GraduationCap size={40} color="#D4A5A5" /> :
                 index === 1 ? <Award size={40} color="#D4A5A5" /> :
                              <FileText size={40} color="#D4A5A5" />}
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                  {cert.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );

  const renderContent = () => {
    switch (currentDesign) {
      case 'carousel':
        return renderCarouselView();
      case 'list':
        return renderListView();
      case 'cards':
        return renderCardLayout();
      case 'timeline':
        return renderTimelineView();
      case 'accordion':
        return renderAccordionStyle();
      default:
        return renderDefaultView();
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} dir={isRTL ? 'rtl' : 'ltr'}>
      <DocumentsDesignNavigation 
        currentDesign={currentDesign}
        onDesignChange={setCurrentDesign}
      />
      
      <Typography variant="h2" gutterBottom color="primary" textAlign={isRTL ? 'right' : 'left'}>
        {t('documents.title')}
      </Typography>

      {renderContent()}
    </Container>
  );
};