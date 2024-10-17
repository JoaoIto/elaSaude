"use client"
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Link from "next/link";

export function NavbarDrawer (){
  const [menuOpen, setMenuOpen] = useState(false);

  // Função que abre ou fecha o drawer
  const toggleDrawer = (open: boolean) => () => {
    setMenuOpen(open);
  };

  const gestanteSubItems = [
    { text: 'Consultas e Exames', href: '/gestante/consultas' },
    { text: 'Alimentação Saudável', href: '/gestante/alimentacao' },
    { text: 'Atividade Física', href: '/gestante/atividade-fisica' },
    { text: 'Aleitamento Materno', href: '/gestante/aleitamento' },
  ];

  const saudeMulherSubItems = [
    { text: 'Métodos Contraceptivos', href: '/saude-mulher/constraceptivos' },
    { text: 'Dignidade Menstrual', href: '/saude-mulher/dignidade-menstrual' },
  ];

  const saudeMulheres = [
    { text: 'Mamografia em mulheres de mais de 40 anos', href: '/mulheres/mamografia/40+' },
    { text: 'Mamografia em mulheres de mais de 50 anos', href: '/mulheres/mamografia/50+' },
  ];

  const saudeMulheresMaisDe40anos = [
    { text: 'Cuidados Essenciais', href: '/mulheres/40+/essencial' },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" className="bg-mediumPink text-white">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" className="ml-4 font-sans">
            elaSaúde
          </Typography>
          {/* Links anteriores */}
          <IconButton component={Link} href="/" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <IconButton component={Link} href="/saiba-mais" color="inherit" aria-label="saiba mais">
            <InfoIcon />
          </IconButton>
          <IconButton component={Link} href="/contato" color="inherit" aria-label="contato">
            <ContactMailIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Menu Drawer */}
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-64 p-4"
          role="presentation"
        >
          {/* Saúde da Adolescente com subitem */}
          <Accordion className="bg-mediumPink text-white">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="adolescente-content" id="adolescente-header">
              <Typography>Saúde da Adolescente</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem component={Link} href="/adolescente/vacinacao">
                  <ListItemText primary="Vacinação" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Saúde da Mulher */}
          <Accordion className="bg-mediumPink text-white">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="mulher-content" id="mulher-header">
              <Typography>Saúde da Mulher</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {saudeMulherSubItems.map((item, index) => (
                  <ListItem component={Link} href={item.href} key={index}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Saúde da Gestante com subitens */}
          <Accordion className="bg-mediumPink text-white">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="gestante-content" id="gestante-header">
              <Typography>Saúde da Gestante</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {gestanteSubItems.map((item, index) => (
                  <ListItem component={Link} href={item.href} key={index}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Saúde da Mulher +40 */}
          <Accordion className="bg-mediumPink text-white">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="gestante-content" id="gestante-header">
              <Typography>Saúde de mulheres de mais de 40 anos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {saudeMulheresMaisDe40anos.map((item, index) => (
                  <ListItem component={Link} href={item.href} key={index}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Mamografia na Mulher +50 anos */}
          <Accordion className="bg-mediumPink text-white">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="mamografia-content" id="mamografia-header">
              <Typography>Mamografia</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {saudeMulheres.map((item, index) => (
                  <ListItem component={Link} href={item.href} key={index}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </div>
      </Drawer>
    </>
  );
};
