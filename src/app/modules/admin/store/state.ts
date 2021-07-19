import { Contact } from "src/app/shared/modules/contact/contact.model";
import { News } from "src/app/shared/modules/home/news.model";
import { CurrentLesson } from "src/app/shared/modules/lesson/current-lessen.model";
import { Homework } from "src/app/shared/modules/works/models/homework.model";
import { Test } from "src/app/shared/modules/works/models/test.model";
import { CurrentHomework } from "../models/current-homework.model";
import { CurrentTest } from "../models/current-test.model";

export interface AdminState {
  messages: Contact[];
  blogs: News[];
  homeworks: Homework[];
  tests: Test[];
  curTest: CurrentTest;
  curHomework: CurrentHomework;
  curLesson: CurrentLesson;
};
