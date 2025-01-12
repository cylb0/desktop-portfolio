const SKILLS_CODE = `package fr.morganfoucaut.constants;

import java.util.Map;

public class Skills {
  public static final String EXPERT = "Expert";
  public static final String ADVANCED = "Avancé";
  public static final String INTERMEDIATE = "Intermediate";
  public static final String BEGINNER = "Beginner";

  public static final Map<String, String> SKILL_LEVELS = Map.of(
    "React", ADVANCED,
    "NodeJS", INTERMEDIATE,
    "PHP", INTERMEDIATE,
    "Java", INTERMEDIATE,
    "MySQL", INTERMEDIATE,
    "Docker", BEGINNER,
    "AWS", BEGINNER
  );

  public static final Map<String, String> SKILL_DESCRIPTIONS = Map.of(
    "React", "Pour sa rapidité, sa communauté et son intelligibilité.",
    "NodeJS", "Pour contruire des API RESTful robustes, découvert via le framework AdonisJS",
    "PHP", "Mon premier langage backend",
    "Java", "Write once, Run anywhere !",
    "MySQL", "Une base de données c'est bien, des requêtes c'est mieux.",
    "Docker", "Pour faciliter la gestion des dépendences.",
    "AWS", "L'avenir du cloud est là."
  );
}`;

export default SKILLS_CODE;
