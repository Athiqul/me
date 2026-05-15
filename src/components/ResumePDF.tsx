import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    fontSize: 10,
    lineHeight: 1.5,
    color: '#000000',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    borderBottomStyle: 'solid',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 6,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 10,
    lineHeight: 1.2,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#000000',
    fontSize: 9,
    lineHeight: 1.2,
  },
  contactItem: {
    marginHorizontal: 5,
  },
  section: {
    marginTop: 15,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    borderBottomStyle: 'solid',
    paddingBottom: 3,
    marginBottom: 8,
  },
  summary: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeaderWrap: {
    marginBottom: 5,
  },
  experienceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  role: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    color: '#000000',
  },
  company: {
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    fontSize: 10,
  },
  period: {
    fontSize: 9,
    color: '#000000',
    fontFamily: 'Helvetica-Bold',
  },
  location: {
    fontSize: 9,
    color: '#000000',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 10,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    color: '#000000',
  },
  skillGroup: {
    marginBottom: 6,
    flexDirection: 'row',
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    width: 100,
    fontSize: 9.5,
  },
  skillValue: {
    flex: 1,
    fontSize: 9.5,
    color: '#000000',
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
  }
});

interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: Array<{ label: string, value: string }>;
  experience: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    period: string;
    achievement?: string;
  }>;
}

const ResumePDF = ({ data }: { data: ResumeData }) => (
  <Document title={`${data.name} - Resume`}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>{data.location}</Text>
          <Text>|</Text>
          <Text style={styles.contactItem}>{data.email}</Text>
          <Text>|</Text>
          <Text style={styles.contactItem}>{data.phone}</Text>
        </View>
        <View style={[styles.contactInfo, { marginTop: 4 }]}>
          <Link style={[styles.link, styles.contactItem]} src={data.linkedin}>LinkedIn</Link>
          <Text>|</Text>
          <Link style={[styles.link, styles.contactItem]} src={data.github}>GitHub</Link>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CORE COMPETENCIES & SKILLS</Text>
        {data.skills.map((skill, i) => (
          <View key={i} style={styles.skillGroup} wrap={false}>
            <Text style={styles.skillLabel}>{skill.label}:</Text>
            <Text style={styles.skillValue}>{skill.value}</Text>
          </View>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {data.experience.map((exp, i) => (
          <View key={i} style={styles.experienceItem}>
            <View style={styles.experienceHeaderWrap} wrap={false}>
              <View style={styles.experienceRow}>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <View style={styles.experienceRow}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
            </View>
            {exp.achievements.map((ach, j) => (
              <View key={j} style={styles.bulletPoint} wrap={false}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{ach}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {data.education.map((edu, i) => (
          <View key={i} style={styles.educationItem} wrap={false}>
            <View style={styles.experienceRow}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.period}>{edu.period}</Text>
            </View>
            <View style={{ marginBottom: edu.achievement ? 3 : 0 }}>
              <Text style={styles.company}>{edu.school}</Text>
            </View>
            {edu.achievement && (
              <View style={styles.bulletPoint} wrap={false}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{edu.achievement}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
