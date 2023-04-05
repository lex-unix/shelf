CREATE OR REPLACE FUNCTION update_goal_progress()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'UPDATE' AND OLD.tag = 'finished' AND NEW.tag != 'finished' THEN
    UPDATE Goal g
    SET progress = GREATEST(g.progress - 1, 0)
    FROM Account a
    WHERE g.userId = a.id AND a.id = NEW.userId;
  ELSIF TG_OP = 'UPDATE' AND OLD.tag != 'finished' AND NEW.tag = 'finished' THEN
    UPDATE Goal g
    SET progress = g.progress + 1
    FROM Account a
    WHERE g.userId = a.id AND a.id = NEW.userId;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER update_goal_progress_trigger
AFTER UPDATE ON Book
FOR EACH ROW
EXECUTE FUNCTION update_goal_progress();
