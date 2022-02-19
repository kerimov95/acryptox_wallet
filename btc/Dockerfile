FROM debian:stable-slim

RUN useradd -r bitcoin \
  && apt-get update -y \
  && apt-get install -y curl gnupg gosu \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /bitcoin

COPY bitcoin-22.0-x86_64-linux-gnu.tar.gz ./

RUN tar -zxf bitcoin-22.0-x86_64-linux-gnu.tar.gz
RUN install -m 0755 -o root -g root -t /usr/local/bin bitcoin-22.0/bin/*

EXPOSE 8332 8333

CMD ["bitcoind"]
