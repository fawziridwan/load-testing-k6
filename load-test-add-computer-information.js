// Creator: k6 Browser Recorder 0.5.0

import { sleep, group } from "k6";
import http from "k6/http";

export const options = { vus: 10, duration: "2m" };

export default function main() {
  let response;

  group(
    "page_2 - http://computer-database.herokuapp.com/computers/new",
    function () {
      response = http.get(
        "http://computer-database.herokuapp.com/computers/new",
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate",
            "accept-language": "en-US,en;q=0.9",
            connection: "keep-alive",
            host: "computer-database.herokuapp.com",
            "upgrade-insecure-requests": "1",
          },
        }
      );
    }
  );

  group(
    "page_3 - http://computer-database.herokuapp.com/computers",
    function () {
      response = http.post(
        "http://computer-database.herokuapp.com/computers",
        {
          name: "Lenovo%20Ideapad",
          introduced: "2020-01-20",
          discontinued: "2025-01-20",
          company: "36",
        },
        {
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            connection: "keep-alive",
            "content-type": "application/x-www-form-urlencoded",
            host: "computer-database.herokuapp.com",
            origin: "http://computer-database.herokuapp.com",
            "upgrade-insecure-requests": "1",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}