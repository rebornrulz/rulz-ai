FROM scratch
ADD alpine-minirootfs-3.19.0-aarch64.tar.gz /
CMD ["/bin/sh"]